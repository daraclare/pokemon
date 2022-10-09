import * as types from "../actions/actionTypes";

export const initialState = {
  pokemon: undefined,
};

export default function pokemonReducer(state = initialState, action) {
  const { pokemon, error } = action;
  switch (action.type) {
    case types.SET_POKEMON_SUCCESS:
      return { ...state, pokemon };
    case types.SET_POKEMON_FAILURE:
      return { ...state, error: error };
    default:
      return state;
  }
}
