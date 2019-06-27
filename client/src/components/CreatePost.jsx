import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewPost, getAllPosts } from '../store/post/actions';

class CreatePost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    this.props.addNewPost(this.props.authorId, this.state.title, this.state.description)
    this.props.getAllPosts()
  }

  render() {
    return (
      <div className="vertical">
        <div className="horizontal">
          <input type="text" name="title" onChange={this.handleChange} />
          <button className="create-post-button" onClick={this.handleClick}>Запостить</button>
        </div>
        <textarea className="create-post-text" maxLength="500" name="description" onChange={this.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authorId: state.user.data._id
})

const mapDispatchToProps = {
  addNewPost,
  getAllPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
