import { call, put } from "redux-saga/effects";
import {
  setPokemonFailure,
  setPokemonSuccess,
  setPokemonListFailure,
  setPokemonListSuccess,
} from "../../actions/pokemonActions";
import { requestGetPokemon, requestGetPokemonList } from "../requests/pokemon";

export function* handleGetPokemon({ id }) {
  try {
    const response = yield call(requestGetPokemon, id);
    const { data } = response;
    yield put(setPokemonSuccess(data));
  } catch (error) {
    yield put(setPokemonFailure(error.message));
  }
}

export function* handleGetPokemonList({ id }) {
  try {
    const response = yield call(requestGetPokemonList, id);
    const { data } = response;
    yield put(setPokemonListSuccess(data));
  } catch (error) {
    yield put(setPokemonListFailure(error.message));
  }
}
