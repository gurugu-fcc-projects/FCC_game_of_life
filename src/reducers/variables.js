import { CHANGE_SIZE } from "../actions/types";

const INIT = {
  size: 20,
  speed: 2,
  color: 100
};

export default function(state = INIT, action) {
  switch (action.type) {
    case CHANGE_SIZE:
      return { ...state, size: action.payload };
    default:
      return state;
  }
}
