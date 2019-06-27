import axios from 'axios'

export const ADD_NEW_POST = 'ADD_NEW_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

const addNew = (post) => ({
  type: ADD_NEW_POST,
  post
})

const getAll = (posts) => ({
  type: GET_ALL_POSTS,
  posts
})

export const addNewPost = (authorId, title, description) => {
  return (dispatch) => {
    return axios.post('/api/posts/', {
      authorId,
      title,
      description
    })
      .then(res => {
        dispatch(addNew(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const getAllPosts = () => {
  return (dispatch) => {
    return axios.get('/api/posts/')
      .then(res => {
        dispatch(getAll(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}