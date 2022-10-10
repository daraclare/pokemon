import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { getPokemon } from "../../redux/actions/pokemonActions";

import styled from "styled-components";

const Wrapper = styled.article`
  padding: 8px;
  border: 1px solid purple;
`;

const PokemonPage = ({ id }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);

  const { pokemon, error } = pokemons;

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch]);

  return (
    <Wrapper>
      {error ? (
        <p>Error Message: {error}</p>
      ) : pokemon ? (
        <div>
          <p>{pokemon.name}</p> <img src={pokemon.sprites.front_default} />
        </div>
      ) : (
        <p>Loading Pokemon …</p>
      )}
    </Wrapper>
  );
};

PokemonPage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PokemonPage;
