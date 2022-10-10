import { all, fork, takeLatest, takeEvery } from "redux-saga/effects";
import { GET_USER, GET_POKEMON } from "../actions/actionTypes";
import { handleGetUser } from "../sagas/handlers/users";
import { handleGetPokemon } from "../sagas/handlers/pokemon";

function* getUserSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}

// function* getPokemonSaga() {
//   yield takeLatest(GET_POKEMON, handleGetPokemon);
// }

function* getPokemonSaga() {
  yield takeEvery(GET_POKEMON, handleGetPokemon);
}

export default function* rootSaga() {
  yield all([fork(getUserSaga), fork(getPokemonSaga)]);
}
