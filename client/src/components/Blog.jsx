import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header';

import { getUserByIdName } from '../store/user/actions';
import CreatePost from './CreatePost';


export class Blog extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getUserByIdName(this.props.match.params.id)
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

              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  getUserByIdName
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
