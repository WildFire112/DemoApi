import axios from 'axios'

import { addLoginErrors, addRegistrationErrors } from '../errors/actions'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const IS_LOGGED_IN = 'IS_LOGGED_IN'
export const GET_USER_BY_IDNAME = 'GET_USER_BY_IDNAME'

const getUser = (user, errors) => ({
  type: GET_USER_BY_IDNAME,
  data: user,
  errors
})

const checkLogin = (user, errors) => ({
  type: IS_LOGGED_IN,
  data: user,
  errors
})

const login = (user) => ({
  type: LOG_IN,
  data: user
})

export const logout = () => ({
  type: LOG_OUT
})

export const postUser = userData => {
  return (dispatch) => {
    return axios.post('/api/auth/login', {
      email: userData.email,
      password: userData.password,
    })
      .then(res => {
        localStorage.setItem('cool-jwt', res.data.token)
        dispatch(login(res.data.user))
      })
      .catch(err => {
        dispatch(addLoginErrors(err.response.data.errors))
      })

  }
}

export const registerNewUser = userData => {
  return (dispatch) => {
    return axios.post('/api/auth/register', {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      repeatPassword: userData.repeatPassword,
      idName: userData.idName
    })
      .then(res => {
        localStorage.setItem('cool-jwt', res.data.token)
        dispatch(login(res.data.user))
      })
      .catch(err => {
        dispatch(addRegistrationErrors(err.response.data.errors))
      })

  }
}

export const isLoggedIn = () => {
  return (dispatch) => {
    const jwt = localStorage.getItem('cool-jwt')
    return axios.get('/api/user', {
      headers: {
        'auth-token': jwt
      }
    })
      .then(res => {
        dispatch(checkLogin(res.data, {}))
      })
      .catch(err => {
        dispatch(checkLogin({}, { msg: err.response.data }))
      })

  }
}

export const getUserByIdName = idName => {
  return (dispatch) => {
    return axios.get(`/api/user/${idName}`)
      .then(res => {
        dispatch(getUser(res.data, {}))
      })
      .catch(err => {
        dispatch(getUser({}, { msg: err.response.data }))
      })
  }
}

export const sendHeaderImage = file => {
  return (dispatch) => {
    const jwt = localStorage.getItem('cool-jwt')
    const reader = new FileReader()
    reader.readAsDataURL(file[0])
    reader.onloadend = () => {
      return axios.post('/api/user/header', {data: reader.result}, { headers: { 'auth-token': jwt } })
        .then(res => {
          dispatch(getUser(res.data, {}))
        })
        .catch(err => {
          dispatch(getUser({}, { msg: err.response.data }))
        })
    }

  }
}
