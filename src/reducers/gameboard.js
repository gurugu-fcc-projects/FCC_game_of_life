import {
  UPDATE_GAMEBOARD,
  POPULATE_GAMEBOARD,
  TOGGLE_CELL,
  RUN_GAME
} from "../actions/types";
import { createEmptyGameboard } from "../utils/updateGameboard";

export default function(state = createEmptyGameboard(20), action) {
  switch (action.type) {
    case UPDATE_GAMEBOARD:
      return action.payload;
    case POPULATE_GAMEBOARD:
      return createEmptyGameboard(action.payload);
    case TOGGLE_CELL:
      const currentCell = {
        alive: !action.isAlive,
        neighbours: state[action.cellName].neighbours
      };
      return { ...state, [action.cellName]: currentCell };
    case RUN_GAME:
      return action.payload;
    default:
      return state;
  }
}
