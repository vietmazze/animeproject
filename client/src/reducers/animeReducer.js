import {
  SET_LOADING,
  GET_ANIME,
  GET_AIRING,
  ANIME_ERROR,
  LOGIN_ENABLE
} from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  animes: null,
  airing: null,
  login: false,
  loginToken: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIME:
      return {
        ...state,
        animes: action.payload,
        loading: false
      };
    case GET_AIRING:
      return {
        ...state,
        airing: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ANIME_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case LOGIN_ENABLE:
      return {
        ...state,
        login: action.payload
      };

    default:
      return state;
  }
};
