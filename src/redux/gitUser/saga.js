import { call, put, takeLatest, throttle } from "redux-saga/effects";
import { USERS_FETCH_REQUESTED } from "./types";
import { usersFetchSucceeded } from "./actions";
import { success, error } from "../notifications/actions";
import gitUsersApi from "../../services/gitUsers/gitUsersApi.js";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* takeLatestFn(action) {
  try {
    yield delay(200);
    const users = yield call(gitUsersApi.getUsers, action.payload.query);
    yield put(success(`Users Fetched with Query ❯❯ ${action.payload.query}`));
    yield put(usersFetchSucceeded(users.data.items));
  } catch (e) {
    yield put(error("Error while fetching data"));
  }
}

function* throttleFn(action) {
  try {
    const users = yield call(gitUsersApi.getUsers, action.payload.query);
    yield put(success(`Users Fetched with Query ❯❯ ${action.payload.query}`));
    yield put(usersFetchSucceeded(users.data.items));
  } catch (e) {
    yield put(error("Error while fetching data"));
  }
}

export function* gitUser_saga() {
  yield takeLatest(USERS_FETCH_REQUESTED, takeLatestFn);
  // yield throttle(500, USERS_FETCH_REQUESTED, throttleFn);
}
