import React, { Component } from 'react'
import './css/post.css'

export default class Post extends Component {
  render () {
    const btoaName = this.props.email
    const userImage = `https://api.adorable.io/avatars/285/${btoaName}.png`

    return (
      <div className="post" key={this.props.id}>
          <img src={userImage} className={`post__image post__image-${btoaName}`} alt={this.props.name} width="60" height="60" />
        <div className="post__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
