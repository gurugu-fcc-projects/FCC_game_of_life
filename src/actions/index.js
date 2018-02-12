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

  return {
    type: types.TOGGLE_CELL,
    payload: {
      cellName,
      isAlive
    }
  };
};

export const runGame = () => ({
  type: types.RUN_GAME
});

export const stopGame = () => ({
  type: types.STOP_GAME
});

export const gameTurn = () => ({
  type: types.GAME_TURN
});

export const setIntervalId = intervalId => ({
  type: types.SET_INTERVAL_ID,
  payload: intervalId
});
