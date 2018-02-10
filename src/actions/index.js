import { POPULATE_GAMEBOARD, DRAG_MOUSE } from "./types";

export const populateGameboard = maxCell => {
  return {
    type: POPULATE_GAMEBOARD,
    payload: maxCell
  };
};

export const dragMouse = isDragging => {
  return {
    type: DRAG_MOUSE,
    payload: isDragging
  };
};
