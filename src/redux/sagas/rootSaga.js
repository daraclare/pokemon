import { all, fork, takeLatest, takeEvery } from "redux-saga/effects";
import {
  GET_POKEMON,
  GET_SINGLE_POKEMON,
  GET_POKEMON_LIST,
} from "../actions/actionTypes";
import {
  handleGetPokemon,
  handleGetSinglePokemon,
  handleGetPokemonList,
} from "../sagas/handlers/pokemon";

function* getPokemonListSaga() {
  yield takeLatest(GET_POKEMON_LIST, handleGetPokemonList);
}

function* getPokemonSaga() {
  yield takeEvery(GET_POKEMON, handleGetPokemon);
}

function* getSinglePokemonSaga() {
  yield takeEvery(GET_SINGLE_POKEMON, handleGetSinglePokemon);
}

export default function* rootSaga() {
  yield all([
    fork(getPokemonSaga),
    fork(getSinglePokemonSaga),
    fork(getPokemonListSaga),
  ]);
}
