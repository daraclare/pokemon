import {
  GET_POKEMON,
  SET_POKEMON_SUCCESS,
  SET_POKEMON_FAILURE,
} from "./actionTypes";

export const getPokemon = (id) => {
  return {
    type: GET_POKEMON,
    id,
  };
};

export const setPokemonSuccess = (pokemon) => {
  return {
    type: SET_POKEMON_SUCCESS,
    pokemon,
  };
};

export const setPokemonFailure = (error) => {
  return {
    type: SET_POKEMON_FAILURE,
    error,
  };
};
