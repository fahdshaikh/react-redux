import { ADD_TODO, DEL_TODO, TOGGLE_TODO, FILTER_TODO } from "./types";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  allTodos: [
    {
      id: uuidv4(),
      todo: "first todo",
      done: true,
    },
    {
      id: uuidv4(),
      todo: "second todo",
      done: true,
    },
    {
      id: uuidv4(),
      todo: "third todo",
      done: false,
    },
  ],
  filter: "all",
};

const TodoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        allTodos: [
          ...state.allTodos,
          {
            id: uuidv4(),
            todo: payload.todo,
            done: false,
          },
        ],
      };

    case DEL_TODO:
      // let temp = state.allTodos.filter((item) => item.id !== payload.id);
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item.id !== payload.id),
      };

    case TOGGLE_TODO:
      let temp2 = state.allTodos.map((item) => {
        if (item.id !== payload.id) {
          return item;
        } else {
          return {
            ...item,
            done: !item.done,
          };
        }
      });
      return {
        ...state,
        allTodos: temp2,
      };

    case FILTER_TODO:
      return {
        ...state,
        filter: payload.filter,
      };

    default:
      return state;
  }
};

export default TodoReducer;
