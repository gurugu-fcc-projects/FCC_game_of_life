import { CHANGE_SIZE, CHANGE_SPEED, CHANGE_COLOR } from "../actions/types";

const INIT = {
  size: 20,
  speed: 10,
  color: 1
};

export default function(state = INIT, action) {
  switch (action.type) {
    case CHANGE_SIZE:
      return {
        ...state,
        size: action.payload
      };
    case CHANGE_SPEED:
      return {
        ...state,
        speed: action.payload
      };
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
}
