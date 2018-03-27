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
  const coords = cell.split("-").map(parseFloat),
    rowsBefore = gameboard.slice(0, coords[0]),
    rowsAfter = gameboard.slice(coords[0] + 1),
    cellsBefore = gameboard[coords[0]].slice(0, coords[1]),
    cellsAfter = gameboard[coords[0]].slice(coords[1] + 1),
    targetCellState = gameboard[coords[0]][coords[1]];

  return [
    ...rowsBefore,
    [...cellsBefore, !targetCellState, ...cellsAfter],
    ...rowsAfter
  ];
};

export const clearGameboardHelper = gameboard => {
  return gameboard.map(row => row.map(cell => false));
};

export const randomizeGameboardHelper = gameboard => {
  const updatedGameboard = {};

  for (let cell in gameboard) {
    updatedGameboard[cell] = {
      alive: Math.random() > 0.35 ? false : true,
      neighbours: gameboard[cell].neighbours
    };
  }

  return updatedGameboard;
};
