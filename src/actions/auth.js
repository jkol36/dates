import {
  LOGIN_ENDPOINT, 
  SIGNUP_ENDPOINT
} from '../config'
import { 
  LOGIN_ERROR, 
  LOGIN_SUCCESS, 
  SIGNUP_ERROR,
  SIGNUP_SUCCESS
} from 'constants'
import agent from 'superagent-bluebird-promise'
import { push } from 'react-router-redux'

const loginError = error => dispatch => {
  dispatch({
    type: LOGIN_ERROR,
    error
  })
}
const signupError = error => dispatch => {
  dispatch({
    type: SIGNUP_ERROR,
    error
  })
}

const loginSuccess = user => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    user
  })
  return dispatch(push('/app'))
}
const signupSuccess = user => dispatch => {
  dispatch({
    type: SIGNUP_SUCCESS,
    user
  })
  return dispatch(push('/app'))
}

export const loginRequest = user => dispatch => {
  if(!user) {
    dispatch(loginError('no user submitted'))
  }
  return agent
          .post(LOGIN_ENDPOINT)
          .send(user)
          .then(res => {
            dispatch(loginSuccess(res.body))
          })
          .catch(err => dispatch(loginError(err)))
}

export const signupRequest = user => dispatch => {
  if(!user) {
    dispatch(loginError('no user submitted'))
  }
  return agent
          .post(SIGNUP_ENDPOINT)
          .send(user)
          .then(res => {
            console.log(`signup response was ${res.body}`)
            dispatch(signupSuccess(res.body))
          })
          .catch(err => dispatch(signupError(err)))
}