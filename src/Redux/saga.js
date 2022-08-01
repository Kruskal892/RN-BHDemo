import { loginSuccess } from "./redux";
import { put, call, takeLatest } from 'redux-saga/effects'
import Axios from 'axios'
import { LOGIN } from './actions'

function* getLogin(action) {
  const { name, password } = action.user

  function fetchApi() {
    return Axios({
      method: 'GET',
      url: 'https://httpbin.org/basic-auth/minh123/123456',
      auth: {
        username: name,
        password: password,
      },
    })
  }
  try {
    yield call(fetchApi);
    yield put({ type: loginSuccess.type, payload: action.user })
  }
  catch (error) {
    yield put({ type: loginSuccess, error })
  }
}

export default function* userSaga() {
  yield takeLatest(LOGIN, getLogin)
}