import { call, put, takeEvery, select } from "redux-saga/effects";
import { increment_1, decrement_1 } from "../inc-dec/actions";
import { apiRes, preFetch } from "./actions";
import { ADD_TODO, DEL_TODO, FILTER_TODO, API_CALLED } from "./types";
import todoApi from "../../services/todo/todoApi.js";
import { maxTimeLimit, apiDelay } from "../../config";

// const getTodo = (state) => state.todo; // to get all the data from todo state
// const preTodoData = yield select(getTodo); eg. for 👆

const getFetchData = (state) => state.todo.prefetch;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
// yield delay(1000);

function* inc_1_TodoSaga(action) {
  yield put(increment_1());
}

function* dec_1_TodoSaga() {
  yield put(decrement_1());
}

function* postTodo(action) {
  try {
    const user = yield call(todoApi.postTodo, {
      title: action.payload.todo,
      completed: false,
    });
    yield put(apiRes(user));
  } catch (e) {
    yield put(apiRes({ error: "ERR_NAME_NOT_RESOLVED", status: 200 }));
  }
}

function* apiCalledFn(action) {
  if (action.payload.called === "then") {
    try {
      const user = yield call(todoApi.getTodo);
      yield put(apiRes(user));
    } catch (e) {
      yield put(apiRes({ error: "ERR_NAME_NOT_RESOLVED", status: 200 }));
    }
  } else {
    try {
      const user = yield call(todoApi.errorTodo, {
        title: action.payload.todo,
        completed: false,
      });
      yield put(apiRes(user));
    } catch (e) {
      yield put(apiRes({ error: "ERR_NAME_NOT_RESOLVED", status: 404 }));
    }
  }
}

function* preFetchFn_1(action) {
  try {
    const user = yield call(todoApi.postTodo, {
      title: action.payload.todo,
      completed: false,
    });
    yield put(apiRes(user));

    yield delay(apiDelay);
    const preFetchData = yield call(todoApi.getTodo);
    yield put(
      preFetch({
        timestamp: new Date(),
        data: { ...preFetchData },
      })
    );
  } catch (e) {
    yield put(apiRes({ error: "ERR_NAME_NOT_RESOLVED", status: 200 }));
  }
}

// const maxTimeLimit = 3000;

const isTimeExausted = (preFetchData) => {
  let now = new Date();
  let diff = now - preFetchData.timestamp;
  if (diff < maxTimeLimit) {
    return false;
  } else {
    return true;
  }
};

function* preFetchFn_2(action) {
  if (action.payload.called === "then") {
    const preFetchData = yield select(getFetchData);

    if (Object.keys(preFetchData).length && !isTimeExausted(preFetchData)) {
      yield put(apiRes({ title: "PRE_FETCHED_DATA", ...preFetchData.data }));
      yield put(preFetch({}));
    } else {
      const todo = yield call(todoApi.getTodo);
      yield put(apiRes(todo));
    }
  }
}

export function* todo_saga() {
  yield takeEvery(FILTER_TODO, inc_1_TodoSaga);
  yield takeEvery(DEL_TODO, dec_1_TodoSaga);
  // yield takeEvery(ADD_TODO, postTodo); //
  // yield takeEvery(API_CALLED, apiCalledFn); //
  yield takeEvery(ADD_TODO, preFetchFn_1); //
  yield takeEvery(API_CALLED, preFetchFn_2); //
}
