import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../constants/auth';

function login (redirect) {
  return {
    type: LOGIN,
    redirect
  }
}

function loginSuccess (token) {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

function loginFail () {
  return {
    type: LOGIN_FAIL
  }
}

function logout () {
  return {
    type: LOGOUT
  }
}

export {
  login,
  loginSuccess,
  loginFail,
  logout
}
