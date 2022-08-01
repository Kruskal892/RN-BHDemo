export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";


export const login = (user) => {
  return {
    type: LOGIN,
    user
  };
};

export const logout = (user) => {
  return {
    type: LOGOUT,
    user
  };
};

export const loginSuccess = (User) => ({
  type: LOGIN_SUCCESS,
  User,
});
export const loginFailed = (string) => ({
  type: LOGIN_FAILED,
  string,
});