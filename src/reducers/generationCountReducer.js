import { RUN_GAME } from "../actions/types";

export default function generationCount(state = 0, action) {
  switch (action.type) {
    case RUN_GAME:
      return state + 1;
    default:
      return state;
  }
}
