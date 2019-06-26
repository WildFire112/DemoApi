import { IS_LOGGED_IN, LOG_OUT, LOG_IN, GET_USER_BY_IDNAME } from './actions'

const defaultState = {
  data: {},
  other: {},
  errors: {},
  isLoggedIn: false
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      if (!localStorage.getItem('cool-jwt'))
        return {
          ...defaultState,
          errors: action.errors
        }
      return {
        ...state,
        data: action.data,
        errors: action.errors,
        isLoggedIn: true
      }
    case LOG_OUT:
      localStorage.removeItem('cool-jwt')
      return defaultState
    case LOG_IN:
      return {
        ...state,
        data: action.data,
        errors: action.errors,
        isLoggedIn: true
      }
    case GET_USER_BY_IDNAME:
      return {
        ...state,
        other: action.data,
        errors: action.errors
      }
    default:
      return state
  }
}
