import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import IncDecReducer from "./inc-dec/reducers";

const rootReducer = combineReducers({
  incDec: IncDecReducer,
});

const logger = (store) => (next) => (action) => {
  console.log(`action`, action);
  return next(action);
};

const thunk =
  (args) =>
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, args);
    }
    return next(action);
  };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk(), logger))
);
