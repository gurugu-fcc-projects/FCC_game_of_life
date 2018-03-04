import * as types from "./types";
import { toggleCellHelper } from "../reducers/gameboard";

export const startGame = () => ({
  type: types.START_GAME
});

export const stopGame = () => ({
  type: types.STOP_GAME
});

export const toggleCell = cell => (dispatch, getState) => {
  const gameboard = getState().gameboard;
  const updatedGameboard = toggleCellHelper(gameboard, cell);

  dispatch({
    type: types.UPDATE_GAMEBOARD,
    payload: updatedGameboard
  });
};

export const runGame = updatedGameboard => ({
  type: types.UPDATE_GAMEBOARD,
  payload: updatedGameboard
});

export const dragMouse = isDragging => ({
  type: types.DRAG_MOUSE,
  payload: isDragging
});

export const setIntervalId = intervalId => ({
  type: types.SET_INTERVAL_ID,
  payload: intervalId
});
