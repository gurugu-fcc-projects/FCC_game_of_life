import { START_GAME, STOP_GAME } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case START_GAME:
      return true;
    case STOP_GAME:
      return false;
    default:
      return state;
  }
}
