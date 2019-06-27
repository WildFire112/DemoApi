import { ADD_NEW_POST, GET_ALL_POSTS } from './actions'

const defaultState = {
  posts: []
}

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return {
        posts: [...state, action.post]
      }
    case GET_ALL_POSTS:
      return {
        posts: action.posts
      }

    default: return state
  }
}
