import { call, put } from "redux-saga/effects";
import { setUserFailure, setUserSuccess } from "../../actions/userActions";
import { requestGetUser } from "../requests/users";

export function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUserSuccess(data.results[0]));
  } catch (error) {
    yield put(setUserFailure(error.message));
  }
}
