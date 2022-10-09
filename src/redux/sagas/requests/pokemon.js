import axios from "axios";

export const requestGetPokemon = (id) => {
  console.log("url", `https://pokeapi.co/api/v2/pokemon/${id}/`);
  return axios.request({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
  });
};
