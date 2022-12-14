import { call, put } from "redux-saga/effects";
import {
  setSinglePokemonFailure,
  setSinglePokemonSuccess,
  setPokemonListFailure,
  setPokemonListSuccess,
} from "../../actions/pokemonActions";
import {
  requestGetPokemonById,
  requestGetPokemonList,
} from "../requests/pokemon";

export function* handleGetSinglePokemon({ id }) {
  try {
    const response = yield call(requestGetPokemonById, id);
    const { data } = response;
    yield put(setSinglePokemonSuccess(data));
  } catch (error) {
    yield put(setSinglePokemonFailure(error.message));
  }
}

export function* handleGetPokemonList({ url }) {
  try {
    const response = yield call(requestGetPokemonList, url);
    yield put(setPokemonListSuccess(response));
  } catch (error) {
    yield put(setPokemonListFailure(error.message));
  }
}
