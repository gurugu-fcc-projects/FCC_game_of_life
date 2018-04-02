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
  const newGameboard = Object.assign({}, gameboard);

  for (let cell in newGameboard) {
    newGameboard[cell].isAlive = false;
  }

  return newGameboard;
};

export const randomizeGameboardHelper = gameboard => {
  const newGameboard = Object.assign({}, gameboard);

  for (let cell in newGameboard) {
    newGameboard[cell].isAlive = Math.random() > 0.35 ? false : true;
  }

  return newGameboard;
};
