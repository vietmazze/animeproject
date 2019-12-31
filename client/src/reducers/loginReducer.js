import {
  LOGIN_ENABLE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL
} from "../actions/types";

const initialState = {
  loginToken: {},
  loginFail: {},
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loginToken: action.payload.token,
        isAuthenticated: true
      };

    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        loginToken: null,
        isAuthenticated: false,
        loginFail: action.payload
      };

    default:
      return state;
  }
};
