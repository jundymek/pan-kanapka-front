import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from "./actions/authActions";

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  token: null,
  error: null
};

export const storeAuth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log(action);
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        token: null,
        error: null
      };
    case LOGIN_SUCCESS:
      console.log(action);
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        username: action.username
      };
    case LOGIN_FAILURE:
        console.log(action)
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
        error: action.error
      };
    default:
      return state;
  }
};
