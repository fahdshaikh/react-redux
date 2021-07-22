import { SUCCESS, ERROR } from "./types";

export const success = (msg) => ({
  type: SUCCESS,
  payload: {
    msg,
  },
});

export const error = (msg) => ({
  type: ERROR,
  payload: {
    msg,
  },
});
