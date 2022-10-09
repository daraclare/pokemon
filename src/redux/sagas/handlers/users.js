import { call, put } from "redux-saga/effects";
import { setUser } from "../../actions/userActions";
import { requestGetUser } from "../requests/users";

export function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data.results[0]));
  } catch (error) {
    console.warn("saga - handler error ", error);
  }
}
