import { put, takeEvery } from "redux-saga/effects";
import { addTodo } from "../todo/actions";
import { INC_5, DEC_5 } from "./types";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let count = 0;

function* inc_5_TodoSaga() {
  yield delay(1000);
  yield put(addTodo(`inc 5 after 1 sec -- ${++count}`));
}

function* dec_5_TodoSaga() {
  yield delay(1000);
  yield put(addTodo(`dec 5 after 1 sec -- ${++count}`));
}

export function* inc_dec_saga() {
  yield takeEvery(INC_5, inc_5_TodoSaga);
  yield takeEvery(DEC_5, dec_5_TodoSaga);
}
