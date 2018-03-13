import * as types from "./types";
import { toggleCellHelper, clearGameboardHelper } from "../reducers/gameboard";

export const startStopGame = startGame => ({
  type: types.START_STOP_GAME,
  payload: startGame
});

export const toggleCell = cell => (dispatch, getState) => {
  const gameboard = getState().gameboard;
  const updatedGameboard = toggleCellHelper(gameboard, cell);

  dispatch({
    type: types.UPDATE_GAMEBOARD,
    payload: updatedGameboard
  });
};

export const clearGameboard = () => (dispatch, getState) => {
  const gameboard = getState().gameboard;
  const updatedGameboard = clearGameboardHelper(gameboard);

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

export const changeSize = newSize => ({
  type: types.CHANGE_SIZE,
  payload: newSize
});
