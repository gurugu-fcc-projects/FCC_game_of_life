import { RUN_GAME, STOP_GAME } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case RUN_GAME:
      return true;
    case STOP_GAME:
      return false;
    // case RUN_STOP_GAME:
    //   return !state;
    default:
      return state;
  }
}
