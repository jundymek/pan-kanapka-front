import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function fetchLogin(username, password) {
  return dispatch => {
    return axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res);
        dispatch(receiveLogin(res.data));
      })
      .catch(error => dispatch(loginError(error)));
  };
}

export const requestLogin = (username, password) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  username,
  password
});

export const receiveLogin = data => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: data.key
});

export const loginError = message => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
});
