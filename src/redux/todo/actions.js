import { ADD_TODO, DEL_TODO, TOGGLE_TODO, FILTER_TODO } from "./types";

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
