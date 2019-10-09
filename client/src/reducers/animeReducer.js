import { SET_LOADING, GET_ANIME, ANIME_ERROR } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  anime: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIME:
      return {
        ...state,
        anime: action.payload,
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
    default:
      return state;
  }
};
