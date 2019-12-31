import {
  SET_LOADING,
  GET_ANIME,
  ANIME_ERROR,
  GET_AIRING,
  LOGIN_ENABLE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL
} from "./types";
import axios from "axios";

// Login the user to api server

const headers = {
  "Content-Type": "application/json"
};
export const getLogin = loginData => async dispatch => {
  try {
    console.log(loginData);
    const res = await axios.post("http://localhost:5000/api/auth", loginData, {
      headers: headers
    });
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message
    });
  }
};

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

export const setLoginEnable = login => {
  return {
    type: LOGIN_ENABLE,
    payload: login
  };
};
