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
        alive: !state[action.cell].isAlive,
        neighbours: state[action.cell].neighbours
      };
      return { ...state, [action.cell]: currentCell };
    case RUN_GAME:
      return action.payload;
    default:
      return state;
  }
}

export const toggleCell = (gameboard, cell) => {
  const currentCell = {
    alive: !gameboard[cell].isAlive,
    neighbours: gameboard[cell].neighbours
  };
  return { ...gameboard, [cell]: currentCell };
};
