import { UPDATE_GAMEBOARD } from "../actions/types";
import { createEmptyGameboard } from "../utils/updateGameboard";

export default function(state = createEmptyGameboard(20), action) {
  switch (action.type) {
    case UPDATE_GAMEBOARD:
      return action.payload;
    default:
      return state;
  }
}

export const toggleCellHelper = (gameboard, cell) => {
  const currentCell = {
    alive: !gameboard[cell].alive,
    neighbours: gameboard[cell].neighbours
  };
  return { ...gameboard, [cell]: currentCell };
};
