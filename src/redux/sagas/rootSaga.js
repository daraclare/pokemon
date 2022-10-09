import { takeLatest } from "redux-saga/effects";
import { GET_USER, GET_POKEMON } from "../actions/actionTypes";
import { handleGetUser } from "../sagas/handlers/users";
import { handleGetPokemon } from "../sagas/handlers/pokemon";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(GET_POKEMON, handleGetPokemon);
}
