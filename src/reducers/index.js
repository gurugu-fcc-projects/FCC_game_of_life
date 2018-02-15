import { combineReducers } from "redux";
import gameboardReducer from "./gameboardReducer";
import generationCountReducer from "./generationCountReducer";
import mouseReducer from "./mouseReducer";
import intervalReducer from "./intervalReducer";
import playingReducer from "./playingReducer";

export default combineReducers({
  gameboard: gameboardReducer,
  generation: generationCountReducer,
  mouseDrag: mouseReducer,
  intervalId: intervalReducer,
  isPlaying: playingReducer
});
