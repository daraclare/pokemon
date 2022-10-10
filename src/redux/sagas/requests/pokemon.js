import axios from "axios";

export const requestGetPokemon = (id) => {
  return axios.request({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
  });
};

export const requestGetPokemonList = () => {
  return axios.request({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`,
  });
};
