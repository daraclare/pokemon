import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCards from "./PokemonCards";
import { getPokemonList } from "../../redux/actions/pokemonActions";
import styled from "styled-components";

const Wrapper = styled.div``;

const PokemonPage = () => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.pokemon);
  const { pokemonPage, error } = props;
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [pokemons, setPokemons] = useState(pokemonPage);

  useEffect(() => {
    setLoading(true);
    dispatch(getPokemonList(url));
    setLoading(false);
  }, [dispatch, url]);

  useEffect(() => {
    setLoading(true);
    setPokemons(pokemonPage);
    setLoading(false);
  }, [pokemonPage]);

  const handlePagination = (event) => {
    setUrl(pokemons[event.target.id]);
  };

  if (error) return <p>Error Message: {error}</p>;
  if (loading) return <p>Loading …</p>;

  return (
    <Wrapper>
      {pokemons && (
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
      )}
    </Wrapper>
  );
};

PokemonPage.propTypes = {
  pokemonPage: PropTypes.object,
  error: PropTypes.string,
};

export default PokemonPage;
