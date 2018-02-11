import { combineReducers } from "redux";
import gameboardReducer from "./gameboardReducer";
import mouseReducer from "./mouseReducer";
import intervalReducer from "./intervalReducer";
import playingReducer from "./playingReducer";

export default combineReducers({
  gameboard: gameboardReducer,
  mouseDrag: mouseReducer,
  intervalId: intervalReducer,
  isPlaying: playingReducer
});
