import { SET_LOADING, GET_ANIME, ANIME_ERROR } from "./types";
import axios from "axios";

// Get anime from api server

export const getAnime = () => async dispatch => {
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

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
