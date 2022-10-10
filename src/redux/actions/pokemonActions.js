import {
  GET_POKEMON,
  SET_POKEMON_SUCCESS,
  SET_POKEMON_FAILURE,
  GET_POKEMON_LIST,
  SET_POKEMON_LIST_SUCCESS,
  SET_POKEMON_LIST_FAILURE,
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
export const getPokemonList = (url) => {
  return {
    type: GET_POKEMON_LIST,
    url,
  };
};

export const setPokemonListSuccess = (pokemonPage) => {
  return {
    type: SET_POKEMON_LIST_SUCCESS,
    pokemonPage,
  };
};

export const setPokemonListFailure = (error) => {
  return {
    type: SET_POKEMON_LIST_FAILURE,
    error,
  };
};
