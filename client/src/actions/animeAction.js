import {
  SET_LOADING,
  GET_ANIME,
  ANIME_ERROR,
  GET_AIRING,
  LOGIN_ENABLE
} from "./types";
import axios from "axios";

// Get anime from api server

export const getAiring = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get("https://api.jikan.moe/v3/top/anime/1/airing");
    console.log(res.data.top);
    dispatch({
      type: GET_ANIME,
      payload: res.data.top
    });
  } catch (err) {
    dispatch({
      type: ANIME_ERROR,
      payload: err.message
    });
  }
};

export const getUpcoming = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(
      "https://api.jikan.moe/v3/top/anime/1/upcoming"
    );
    console.log(res.data.top);
    dispatch({
      type: GET_AIRING,
      payload: res.data.top
    });
  } catch (err) {
    dispatch({
      type: ANIME_ERROR,
      payload: err.message
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const setLoginEnable = () => {
  return {
    type: LOGIN_ENABLE
  };
};
