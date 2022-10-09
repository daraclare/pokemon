import { call, put } from "redux-saga/effects";
import {
  setPokemonFailure,
  setPokemonSuccess,
} from "../../actions/pokemonActions";
import { requestGetPokemon } from "../requests/pokemon";

export function* handleGetPokemon({ id }) {
  console.log("handlegetpokemon", id);
  try {
    const response = yield call(requestGetPokemon, id);
    const { data } = response;
    yield put(setPokemonSuccess(data));
  } catch (error) {
    yield put(setPokemonFailure(error.message));
  }
}
