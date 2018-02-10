import { combineReducers } from "redux";
import gameboardReducer from "./gameboardReducer";
import mouseReducer from "./mouseReducer";

export default combineReducers({
  gameboard: gameboardReducer,
  mouseDrag: mouseReducer
});
