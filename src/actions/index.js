import { POPULATE_GAMEBOARD } from "./types";

export const populateGameboard = maxCell => {
  return {
    type: POPULATE_GAMEBOARD,
    payload: maxCell
  };
};
