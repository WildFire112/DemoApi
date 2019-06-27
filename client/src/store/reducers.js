import { combineReducers } from "redux";
import { errorsReducer } from "./errors/reducers";
import { userReducer } from './user/reducers'
import { postsReducer } from "./post/reducers";


export default combineReducers({
  user: userReducer,
  errors: errorsReducer,
  posts: postsReducer
})
