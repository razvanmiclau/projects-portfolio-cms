import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux';

import { LOGIN } from '../constants/auth';
import {
  loginSuccess,
  loginFail
} from '../actions/auth';

const getForm = (state, form) => {
  return state.getIn(['form', form]).toJS();
}

const sendCredentials = (route, credentials) => {
  return fetch(`http://localhost:5000/authenticate/${route}`, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify(credentials)
  })
  .then(res => {
    if (res.status === 200) return res.json()
    throw res;
  });
};

function* login (action) {
  const { redirect } = action;
  try {
    const credentials = yield select(getForm, 'login');
    const result = yield call(sendCredentials, 'login', credentials.values);

    // save token to localStorage.
    localStorage.setItem('token', result.token);
    yield put(loginSuccess(result.token));
    yield put(push(redirect));
  } catch (err) {
    // let message = '';
    // if (err.status === 401) message = 'Invalid email or password!';
    // message = 'An error has occured!';
    //
    // yield put(loginFail());
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, login)
}
