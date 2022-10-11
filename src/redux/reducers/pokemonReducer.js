import * as types from "../actions/actionTypes";

export const initialState = {
  pokemonPage: undefined,
  singlePokemon: undefined,
};

export default function pokemonReducer(state = initialState, action) {
  const { pokemon, error, pokemonPage } = action;
  switch (action.type) {
    case types.SET_POKEMON_LIST_SUCCESS:
      return { ...state, pokemonPage };
    case types.SET_POKEMON_LIST_FAILURE:
      return { ...state, error: error };
    case types.SET_SINGLE_POKEMON_SUCCESS:
      return { ...state, pokemonList: [], singlePokemon: pokemon };
    case types.SET_SINGLE_POKEMON_FAILURE:
      return { ...state, error: error };
    default:
      return state;
  }
}
