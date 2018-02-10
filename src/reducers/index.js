import { combineReducers } from "redux";
import gameboardReducer from "./gameboardReducer";
import mouseReducer from "./mouseReducer";
import gameStatusReducer from "./gameStatusReducer";
import turnsIntervalReducer from "./turnsIntervalReducer";

export default combineReducers({
  gameboard: gameboardReducer,
  mouseDrag: mouseReducer,
  gameStatus: gameStatusReducer,
  turnsInterval: turnsIntervalReducer
});
