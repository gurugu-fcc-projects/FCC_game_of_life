import { POPULATE_GAMEBOARD, TOGGLE_CELL, RUN_GAME } from "../actions/types";
import { populateGameboard } from "../utils/updateGameboard";

export default function(state = populateGameboard(20), action) {
  switch (action.type) {
    case POPULATE_GAMEBOARD:
      return populateGameboard(action.payload);
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
