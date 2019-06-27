import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header';
import CreatePost from './CreatePost';

import { getUserByIdName } from '../store/user/actions';
import { getAllPosts } from '../store/post/actions';
import Post from './Post';


export class Blog extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getUserByIdName(this.props.match.params.id)
    this.props.getAllPosts()
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <div className="content-center">
            <CreatePost />
            <div className="posts-container">
              {
                this.props.posts.map(post => 
                  <Post post={post}/>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts.posts
})

const mapDispatchToProps = {
  getUserByIdName,
  getAllPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
