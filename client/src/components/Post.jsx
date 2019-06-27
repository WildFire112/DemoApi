import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    let d = new Date(this.props.post.date);
    return (
      <div className="post">
        <div className="post-title">
          {this.props.post.title}
        </div>
        <div className="post-description">
          {this.props.post.description}
        </div>
        <div className="post-date">
          {d.toUTCString()}
        </div>
      </div>
    )
  }
}

