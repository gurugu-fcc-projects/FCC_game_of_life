import { START_STOP_GAME } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case START_STOP_GAME:
      return action.payload;
    default:
      return state;
  }
}
