import { combineReducers } from "redux";
import gameboardReducer from "./gameboardReducer";
import mouseReducer from "./mouseReducer";
import gameStatusReducer from "./gameStatusReducer";

export default combineReducers({
  gameboard: gameboardReducer,
  mouseDrag: mouseReducer,
  isPlaying: gameStatusReducer
});
