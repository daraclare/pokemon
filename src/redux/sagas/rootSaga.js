import { all, fork, takeLatest, takeEvery } from "redux-saga/effects";
import { GET_SINGLE_POKEMON, GET_POKEMON_LIST } from "../actions/actionTypes";
import {
  handleGetSinglePokemon,
  handleGetPokemonList,
} from "../sagas/handlers/pokemon";

function* getPokemonListSaga() {
  yield takeLatest(GET_POKEMON_LIST, handleGetPokemonList);
}

function* getSinglePokemonSaga() {
  yield takeEvery(GET_SINGLE_POKEMON, handleGetSinglePokemon);
}

export default function* rootSaga() {
  yield all([fork(getSinglePokemonSaga), fork(getPokemonListSaga)]);
}
