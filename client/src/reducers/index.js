import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  anime: animeReducer,
  auth: authReducer,
  alerts: alertReducer
});
