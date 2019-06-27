import axios from 'axios'

export const ADD_NEW_POST = 'ADD_NEW_POST'


const addNew = (title, description, authorId) => ({
  type: ADD_NEW_POST,
  title,
  description,
  authorId
})

export const addNewPost = (authorId, title, description) => {
  return (dispatch) => {
    return axios.post('/api/posts/', {
      authorId,
      title,
      description
    })
      .then(res => {
        dispatch(addNew(title, description, authorId))
      })
      .catch(err => {
        dispatch(addNew(title, description, authorId))
      })
  }
}