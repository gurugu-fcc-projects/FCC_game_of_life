import { combineReducers } from "redux";
import gameboardReducer from "./gameboardReducer";

export default combineReducers({
  gameboard: gameboardReducer
});
