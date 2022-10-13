import axios from "axios";

export const requestGetPokemonById = (id) => {
  return axios.request({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
  });
};

export const requestGetPokemonByUrl = (url) => {
  return axios.request({
    method: "get",
    url: url,
  });
};

export const requestGetPokemonList = async (url) => {
  let pokemons = [];

  try {
    const response = await axios.request({
      method: "get",
      url,
    });
    const arr = response.data.results;
    return Promise.all(
      arr.map(async (pokemon) => {
        const result = await requestGetPokemonByUrl(pokemon.url, null);
        pokemons.push(result.data);
      })
    ).then(() => {
      pokemons.sort((a, b) => a.id - b.id);
      return { pageDetails: response.data, pokemons };
    });
  } catch (error) {
    throw new Error(`Error with requestGetPokemonList:`, error);
  }
};
