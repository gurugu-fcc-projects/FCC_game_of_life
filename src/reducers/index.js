import { combineReducers } from "redux";
import gameboard from "./gameboard";
import mouse from "./mouse";
import interval from "./interval";
import status from "./status";

export default combineReducers({
  gameboard: gameboard,
  mouseDrag: mouse,
  intervalId: interval,
  isPlaying: status
});
