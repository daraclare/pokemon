import axios from "axios";

export const requestGetPokemon = () => {
  return axios.request({
    method: "get",
    url: "https://pokeapi.co/api/v2/ability/?limit=20&offset=20",
  });
};
