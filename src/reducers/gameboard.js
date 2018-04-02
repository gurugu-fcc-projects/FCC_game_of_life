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
  const oldCell = gameboard[cell];
  const newCell = { ...oldCell, isAlive: !oldCell.isAlive };

  return { ...gameboard, [cell]: newCell };
};

export const clearGameboardHelper = gameboard => {
  return gameboard.map(row => row.map(cell => false));
};

export const randomizeGameboardHelper = gameboard => {
  return gameboard.map(row =>
    row.map(cell => (Math.random() > 0.35 ? false : true))
  );
};
