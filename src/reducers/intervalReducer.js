import { SET_INTERVAL } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SET_INTERVAL:
      return action.payload;
    default:
      return state;
  }
}
