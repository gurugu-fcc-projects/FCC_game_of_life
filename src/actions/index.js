import * as types from "./types";

export const populateGameboard = maxCell => ({
  type: types.POPULATE_GAMEBOARD,
  payload: maxCell
});

export const dragMouse = isDragging => ({
  type: types.DRAG_MOUSE,
  payload: isDragging
});

export const toggleCell = (cellClass, isAlive) => {
  const cellName = cellClass.split(" ")[0];
  console.log("cellName", cellName);
  return {
    type: types.TOGGLE_CELL,
    cellName,
    isAlive
  };
};

export const startGame = () => ({
  type: types.START_GAME
});

export const runGame = updatedGameboard => ({
  type: types.RUN_GAME,
  payload: updatedGameboard
});

export const stopGame = () => ({
  type: types.STOP_GAME
});

export const setIntervalId = intervalId => ({
  type: types.SET_INTERVAL_ID,
  payload: intervalId
});

export const changeSize = newSize => ({
  type: types.CHANGE_SIZE,
  payload: newSize
});
