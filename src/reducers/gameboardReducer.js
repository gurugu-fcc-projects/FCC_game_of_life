import { POPULATE_GAMEBOARD, TOGGLE_CELL, GAME_TURN } from "../actions/types";
import { populateGameboard } from "../utils/populateGameboard";
import { checkGameboard } from "../utils/runGameboard";

export default function(state = null, action) {
  switch (action.type) {
    case POPULATE_GAMEBOARD:
      return populateGameboard(action.payload);
    case TOGGLE_CELL:
      const currentCell = {
        alive: action.payload.isActive,
        neighbours: state[action.payload.cellName].neighbours
      };
      return { ...state, [action.payload.cellName]: currentCell };
    case GAME_TURN:
      return checkGameboard(state);
    default:
      return state;
  }
}
