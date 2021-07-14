import { INC_1, DEC_1, INC_5, DEC_5 } from "./types";

const INITIAL_STATE = {
  count: 0,
};

const IncDecReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case INC_1:
      return {
        ...state,
        count: state.count + 1,
      };

    case DEC_1:
      return {
        ...state,
        count: state.count - 1,
      };

    case INC_5:
      return {
        ...state,
        count: state.count + 5,
      };

    case DEC_5:
      return {
        ...state,
        count: state.count - 5,
      };

    default:
      return state;
  }
};

export default IncDecReducer;
