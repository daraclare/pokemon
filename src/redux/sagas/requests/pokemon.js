import axios from "axios";

export const requestGetPokemon = (id) => {
  return axios.request({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
  });
};

export const requestGetPokemonList = (url) => {
  return axios.request({
    method: "get",
    url,
  });
};
