import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from "./actions/authActions";

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('isAuthenticated'),
  token: localStorage.getItem('token'),
  error: null,
  username: localStorage.getItem('username')
};

export const storeAuth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        token: null,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        username: action.username
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.message
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        token: null,
        error: action.error
      };
    default:
      return state;
  }
};
