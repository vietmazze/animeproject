import {
  LOGIN_ENABLE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  SET_ALERT,
  REMOVE_ALERT
} from "../actions/types";

const initialState = {
  loginToken: {},
  loginFail: {},
  isAuthenticated: false,
  registerFail: {},
  alerts: {}
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
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loginToken: action.payload.token,
        isAuthenticated: true
      };

    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        loginToken: null,
        isAuthenticated: false,
        registerFail: action.payload
      };

    default:
      return state;
  }
};
