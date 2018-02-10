import { POPULATE_GAMEBOARD, DRAG_MOUSE, TOGGLE_CELL } from "./types";

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
