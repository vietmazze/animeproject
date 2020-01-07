import {
  SET_LOADING,
  GET_ANIME,
  ANIME_ERROR,
  GET_AIRING,
  LOGIN_ENABLE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_ENABLE,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";
import axios from "axios";

const headers = {
  "Content-Type": "application/json"
};

//Register user and return token
export const getRegister = registerData => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/users",
      registerData,
      { headers: headers }
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    });
  }
};

// Login the user to api server and return token

export const getLogin = loginData => async dispatch => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth", loginData, {
      headers: headers
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    });
    console.log(err.response.data.msg);
  }
};

// Get anime from api server

export const getAiring = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get("https://api.jikan.moe/v3/top/anime/1/airing");

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

export const setRegisterEnable = register => {
  return {
    type: REGISTER_ENABLE,
    payload: register
  };
};
