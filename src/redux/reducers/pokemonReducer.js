import * as types from "../actions/actionTypes";

export const initialState = {
  pokemonList: [],
};

export default function pokemonReducer(state = initialState, action) {
  const { pokemon, error } = action;
  const { pokemonList } = state;
  switch (action.type) {
    case types.SET_POKEMON_SUCCESS:
      return { ...state, pokemonList: pokemonList.concat([pokemon]) };
    case types.SET_POKEMON_FAILURE:
      return { ...state, error: error };
    default:
      return state;
  }
}
