import { UPDATE_GAMEBOARD, CHANGE_SIZE } from "../actions/types";
import { createEmptyGameboard } from "../utils/updateGameboard";

export default function(state = createEmptyGameboard(20), action) {
  switch (action.type) {
    case UPDATE_GAMEBOARD:
      return action.payload;
    case CHANGE_SIZE:
      return createEmptyGameboard(action.payload);
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

export const clearGameboardHelper = gameboard => {
  const updatedGameboardCells = {};

  for (let cell in gameboard) {
    if (gameboard[cell].alive) {
      updatedGameboardCells[cell] = {
        alive: false,
        neighbours: gameboard[cell].neighbours
      };
    }
  }

  return { ...gameboard, ...updatedGameboardCells };
};
