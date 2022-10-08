import { call, put } from "redux-saga/effects";
import { setUser } from "../../actions/userActions";
import { requestGetUser } from "../requests/users";

export function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    console.log(response.data.results[0]);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.warn("saga - handler error ", error);
  }
}
