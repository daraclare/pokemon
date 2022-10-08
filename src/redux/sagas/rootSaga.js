import { takeLatest } from "redux-saga/effects";
import { getUser } from "../actions/userActions";
import { handleGetUser } from "../sagas/handlers/users";

export function* watcherSaga() {
  yield takeLatest(getUser, handleGetUser);
}
