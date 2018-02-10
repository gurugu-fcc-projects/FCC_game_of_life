import { POPULATE_GAMEBOARD } from "../actions/types";
import { populateGameboard } from "../utils/populateGameboard";

export default function(state = null, action) {
  switch (action.type) {
    case POPULATE_GAMEBOARD:
      return populateGameboard(action.payload);
    default:
      return state;
  }
}
