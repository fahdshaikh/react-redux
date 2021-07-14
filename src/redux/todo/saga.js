import { put, takeEvery } from "redux-saga/effects";
import { increment_1, decrement_1 } from "../inc-dec/actions";
import { DEL_TODO, FILTER_TODO } from "./types";

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* inc_1_TodoSaga(action) {
  console.log(`action`, action.payload);
  yield put(increment_1());
}
// yield delay(1000);

function* dec_1_TodoSaga() {
  yield put(decrement_1());
}
// yield delay(1000);

export function* todo_saga() {
  yield takeEvery(FILTER_TODO, inc_1_TodoSaga);
  yield takeEvery(DEL_TODO, dec_1_TodoSaga);
}
