import { all, fork, takeLatest, takeEvery } from "redux-saga/effects";
import {
  GET_USER,
  GET_POKEMON,
  GET_POKEMON_LIST,
} from "../actions/actionTypes";
import { handleGetUser } from "../sagas/handlers/users";
import {
  handleGetPokemon,
  handleGetPokemonList,
} from "../sagas/handlers/pokemon";

function* getUserSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}

function* getPokemonListSaga() {
  yield takeLatest(GET_POKEMON_LIST, handleGetPokemonList);
}

function* getPokemonSaga() {
  yield takeEvery(GET_POKEMON, handleGetPokemon);
}

export default function* rootSaga() {
  yield all([
    fork(getUserSaga),
    fork(getPokemonSaga),
    fork(getPokemonListSaga),
  ]);
}
