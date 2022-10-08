import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../actions/actionTypes";
import { handleGetUser } from "../sagas/handlers/users";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
