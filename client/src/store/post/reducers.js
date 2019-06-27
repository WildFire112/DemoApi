import { ADD_NEW_POST } from './actions'

const defaultState = {

}

export const errorsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return {
        
      }

    default: return state
  }
}
