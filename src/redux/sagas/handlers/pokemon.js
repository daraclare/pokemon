import { call, put } from "redux-saga/effects";
import {
  setPokemonFailure,
  setPokemonSuccess,
} from "../../actions/pokemonActions";
import { requestGetPokemon } from "../requests/pokemon";

export function* handleGetPokemon() {
  try {
    const response = yield call(requestGetPokemon);
    const { data } = response;
    yield put(setPokemonSuccess(data.results));
  } catch (error) {
    yield put(setPokemonFailure(error.message));
  }
}
