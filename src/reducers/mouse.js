import { DRAG_MOUSE } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case DRAG_MOUSE:
      return action.payload;
    default:
      return state;
  }
}
