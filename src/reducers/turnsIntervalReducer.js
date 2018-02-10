import { TOGGLE_INTERVAL } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case TOGGLE_INTERVAL:
      return action.payload;
    default:
      return state;
  }
}
