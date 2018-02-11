import {
  POPULATE_GAMEBOARD,
  DRAG_MOUSE,
  TOGGLE_CELL,
  RUN_STOP_GAME,
  GAME_TURN,
  SET_INTERVAL
} from "./types";

export const populateGameboard = maxCell => ({
  type: POPULATE_GAMEBOARD,
  payload: maxCell
});

export const dragMouse = isDragging => ({
  type: DRAG_MOUSE,
  payload: isDragging
});

export const toggleCell = (cellClass, isActive) => {
  const cellName = cellClass.split(" ")[0];

  return {
    type: TOGGLE_CELL,
    payload: {
      cellName,
      isActive
    }
  };
};

export const runStopGame = () => ({
  type: RUN_STOP_GAME
});

export const gameTurn = () => ({
  type: GAME_TURN
});

export const setInterval = intervalId => ({
  type: SET_INTERVAL,
  payload: intervalId
});
