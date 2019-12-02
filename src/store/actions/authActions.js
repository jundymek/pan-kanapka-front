import axios from "axios";
import { loginWindowHideShow } from "../../helpers/loginWindowHideShow"

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

export function fetchLogin(username, password) {
  return dispatch => {
    return axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res);
        console.log(username);
        dispatch(receiveLogin(res.data, username));
        loginWindowHideShow()
      })
      .catch(error => dispatch(loginError(error)));
  };
}
export function fetchLogout(token) {
  return dispatch => {
    return axios
      .post("http://127.0.0.1:8000/rest-auth/logout/", {
        headers: {
            'Authorization': token
        }
      })
      .then(res => {
        console.log(res);
        dispatch(handleLogout());
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

export const receiveLogin = (data, username) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: data.key,
  username: username
});

export const handleLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: false,
  isAuthenticated: false,
  token: null,
  username: null
});

export const loginError = message => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
});
