import { call, put, takeEvery } from "redux-saga/effects";
import { increment_1, decrement_1 } from "../inc-dec/actions";
import { apiRes } from "./actions";
import { ADD_TODO, DEL_TODO, FILTER_TODO, API_CALLED } from "./types";
import todoApi from "../../services/todo/todoApi.js";

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));
// yield delay(1000);

function* inc_1_TodoSaga(action) {
  console.log(`action`, action.payload);
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

export function* todo_saga() {
  yield takeEvery(FILTER_TODO, inc_1_TodoSaga);
  yield takeEvery(DEL_TODO, dec_1_TodoSaga);
  yield takeEvery(ADD_TODO, postTodo); //
  yield takeEvery(API_CALLED, apiCalledFn); //
}
