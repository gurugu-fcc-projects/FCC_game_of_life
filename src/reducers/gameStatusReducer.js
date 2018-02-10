import { RUN_STOP_GAME } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case RUN_STOP_GAME:
      return !state;
    default:
      return state;
  }
}
