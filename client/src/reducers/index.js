import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import loginReducer from "./animeReducer";

export default combineReducers({
  anime: animeReducer,
  login: loginReducer
});
