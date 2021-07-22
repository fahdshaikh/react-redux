import { USERS_FETCH_REQUESTED, USERS_FETCH_SUCCEEDED } from "./types";

const INITIAL_STATE = {
  query: "",
  users: [],
};

const GitUserReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        query: payload.query,
      };

    case USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        users: payload.users,
      };

    default:
      return state;
  }
};

export default GitUserReducer;
