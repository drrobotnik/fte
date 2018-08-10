import React, { Component } from 'react'
import { withRouter } from 'react-static'
import Axios from 'axios'

import Post from './post'

class PostForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      username: '',
      error: null,
      submissions: [],
    }
  }

  validateTextLength = (text, minLength=10, maxLength) =>
    text.length > minLength && text.length <= maxLength

  validateEmail = () => {
    const { title } = this.state
    return title.length > 0
  }

  onSubmit = event => {
    const {
      title, body, username, submissions,
    } = this.state

    Axios.post('http://localhost:3001/posts', {
      title,
      body,
      username,
    })
      .then(response => {
        const {
          id, title, body, username,
        } = response.data

        submissions.push(
          <Post key={id} name={title} email={username}>
            <h3 className="post__author">
              {title}
            </h3>
            <span dangerouslySetInnerHTML={{ __html: body }} />
          </Post>
        )

        this.setState({
          title: '',
          body: '',
          username: '',
          submissions,
        })
      })
      .catch(error => {
        this.setState({ error })
      })

    event.preventDefault()
  }

  render () {
    const {
      title, body, username, error,
    } = this.state

    const isEnabled = this.validateTextLength(title, 4, 60)
      && this.validateTextLength(body, 10, 140)

    const items = []

    this.state.submissions.map(post => items.push(post))

    return (
      <form onSubmit={this.onSubmit}>
        <input className="post__text-field"
          value={username}
          onChange={event => {
            this.setState({ username: event.target.value })
            }
          }
          type="text"
          placeholder="Username (Optional)"
        />
        <input className="post__text-field"
          value={title}
          onChange={event => {
            this.setState({ title: event.target.value })
            }
          }
          type="text"
          placeholder="Post Title"
        />
        <textarea className="post__text-area"
          value={body}
          onChange={event =>
            this.setState({ body: event.target.value })
          }
          placeholder="Content"
        />
        <button className="post__submit-button" disabled={!isEnabled} type="submit">
          Post
        </button>
        {error && <p>{error.message}</p>}

        {items}
      </form>
    )
  }
}

export default withRouter(PostForm)
