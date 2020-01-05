import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

export function fetchLogin(username, password) {
  return dispatch => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/rest-auth/login/`, {
        username: username,
        password: password
      })
      .then(res => {
        localStorage.setItem('token', res.data.key)
        localStorage.setItem('username', username)
        dispatch(receiveLogin(res.data, username));
      })
      .catch(error => dispatch(loginError(error)));
  };
}

export function fetchLogout(token) {
  return dispatch => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/rest-auth/logout/`, {
        headers: {
            'Authorization': token
        }
      })
      .then(res => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        dispatch(handleLogout());
      })
      .catch(error => dispatch(loginError(error)));
  };
}

export const requestLogin = (username, password) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  username,
  password
});

export const receiveLogin = (data, username) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  token: data.key,
  username: username
});

export const handleLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: false,
  token: null,
  username: null
});

export const loginError = message => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  message
});
