import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import IncDecReducer from "./inc-dec/reducers";
import TodoReducer from "./todo/reducers";

import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { inc_dec_saga } from "./inc-dec/saga";
import { todo_saga } from "./todo/saga";

const rootReducer = combineReducers({
  incDec: IncDecReducer,
  todo: TodoReducer,
});

// const logger = (store) => (next) => (action) => {
//   console.log(`action`, action);
//   return next(action);
// };

// ▜▛ █▬█ ▙▟ ▛▟ 🅺---------------------------------------------------------------

// ▀█▀ █░█ █░█ █▄░█ █▄▀
// ░█░ █▀█ █▄█ █░▀█ █░█

// const thunk =
//   (args) =>
//   ({ getState, dispatch }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       return action(dispatch, getState, args);
//     }
//     return next(action);
//   };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = compose;

// export const store = createStore(
// rootReducer,
// composeEnhancers(applyMiddleware(thunk(), logger))
// );

// export const store = createStore(rootReducer);

// composeEnhancers(applyMiddleware(thunk(), logger))

// █▀█ █▀▀ █▀▄ █░█ ▀▄▀ ▄▄ █▀ ▄▀█ █▀▀ ▄▀█
// █▀▄ ██▄ █▄▀ █▄█ █░█ ░░ ▄█ █▀█ █▄█ █▀█

function* rootSaga() {
  yield all([inc_dec_saga(), todo_saga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, logger))
);

// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
