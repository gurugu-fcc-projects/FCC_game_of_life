import { CHANGE_SIZE } from "../actions/types";

export default function(state = 20, action) {
  switch (action.type) {
    case CHANGE_SIZE:
      return action.payload;
    default:
      return state;
  }
}
