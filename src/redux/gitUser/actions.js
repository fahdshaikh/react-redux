import { USERS_FETCH_REQUESTED, USERS_FETCH_SUCCEEDED } from "./types";

export const usersFetchRequested = (query) => ({
  type: USERS_FETCH_REQUESTED,
  payload: {
    query,
  },
});

export const usersFetchSucceeded = (users) => ({
  type: USERS_FETCH_SUCCEEDED,
  payload: {
    users,
  },
});
