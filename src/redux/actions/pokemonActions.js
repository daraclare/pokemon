import {
  GET_SINGLE_POKEMON,
  SET_SINGLE_POKEMON_SUCCESS,
  SET_SINGLE_POKEMON_FAILURE,
  GET_POKEMON_LIST,
  SET_POKEMON_LIST_SUCCESS,
  SET_POKEMON_LIST_FAILURE,
} from "./actionTypes";

export const getSinglePokemon = (id) => {
  return {
    type: GET_SINGLE_POKEMON,
    id,
  };
};

export const setSinglePokemonSuccess = (pokemon) => {
  return {
    type: SET_SINGLE_POKEMON_SUCCESS,
    pokemon,
  };
};

export const setSinglePokemonFailure = (error) => {
  return {
    type: SET_SINGLE_POKEMON_FAILURE,
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
