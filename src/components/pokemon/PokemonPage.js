import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCards from "./PokemonCards";
import { getPokemonList } from "../../redux/actions/pokemonActions";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid grey;
`;

const PokemonPage = () => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.pokemon);
  const { pokemonPage, error } = props;

  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [pokemons, setPokemons] = useState(pokemonPage);

  useEffect(() => {
    dispatch(getPokemonList(url));
  }, [dispatch, url]);

  useEffect(() => {
    setPokemons(pokemonPage);
  }, [pokemonPage]);

  const handlePagination = (event) => {
    setUrl(pokemons[event.target.id]);
  };

  if (error) return <p>Error Message: {error}</p>;

  return (
    <Wrapper>
      {pokemons ? (
        <>
          <p>
            <b>Pokemon Total:</b> {pokemons.count}{" "}
          </p>
          <PokemonCards pokemonArray={pokemons.results} />

          <button
            id="previous"
            onClick={handlePagination}
            disabled={!pokemons.previous}
          >
            Previous
          </button>
          <button
            onClick={handlePagination}
            id="next"
            disabled={!pokemons.next}
          >
            Next
          </button>
        </>
      ) : (
        <p>Loading … </p>
      )}
    </Wrapper>
  );
};

PokemonPage.propTypes = {
  pokemonPage: PropTypes.object,
  error: PropTypes.string,
};

export default PokemonPage;
