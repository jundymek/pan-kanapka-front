import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from "./actions/authActions";

const initialState = {
  isFetching: false,
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
        token: null,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.token,
        username: action.username
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: false,
        token: null,
        username: null,
        error: action.error
      };
    default:
      return state;
  }
};
