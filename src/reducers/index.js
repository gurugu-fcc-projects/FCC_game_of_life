import { combineReducers } from "redux";
import gameboard from "./gameboard";
import generation from "./generation";
import mouse from "./mouse";
import interval from "./interval";
import status from "./status";

export default combineReducers({
  gameboard: gameboard,
  generation: generation,
  mouseDrag: mouse,
  intervalId: interval,
  isPlaying: status
});
