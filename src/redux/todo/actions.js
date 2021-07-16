import {
  ADD_TODO,
  DEL_TODO,
  TOGGLE_TODO,
  FILTER_TODO,
  API_RES,
  API_CALLED,
  PRE_FETCH,
} from "./types";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export const delTodo = (id) => ({
  type: DEL_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const filterTodo = (filter) => ({
  type: FILTER_TODO,
  payload: {
    filter,
  },
});

export const apiRes = (res) => ({
  type: API_RES,
  payload: {
    res,
  },
});

export const apiCalled = (called) => ({
  type: API_CALLED,
  payload: {
    called,
  },
});

export const preFetch = (prefetch) => ({
  type: PRE_FETCH,
  payload: {
    prefetch,
  },
});
