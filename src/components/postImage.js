import React, { Component } from 'react'
import Axios from 'axios'

import './css/post.css'


export default class PostImage extends Component {
  state = {
    media: {},
  }

  componentDidMount () {
    Axios.get(`https://blog.turbotax.intuit.com/wp-json/wp/v2/media/${this.props.id}`).then(
      res => {
        const media = res.data
        this.setState({ media })
      })
  }

  render () {
    console.log(this.state.media)

    return (
      <div className="post" key={this.props.id}>
        { /* <img src={this.state.media.guid.rendered} className={`post__image post__image-${btoaName}`} alt={this.props.name} width="60" height="60" /> */ }
        <div className="post__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
