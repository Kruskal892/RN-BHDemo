import Axios from 'axios'
import { logoutSuccess } from './redux';


export function logout() {
  return function Logout(dispatch, getState) {
    dispatch(logoutSuccess())
  }
}