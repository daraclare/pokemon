import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { getPokemon } from "../../redux/actions/pokemonActions";

import styled from "styled-components";
import PokemonCardDetails from "./PokemonCardDetails";

const Wrapper = styled.article`
  display: flex;
  border: 5px blue solid;
  padding: 8px;
  flex-wrap: wrap;
`;

const PokemonCards = ({ idsArr }) => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.pokemon);
  const { pokemonList = [], error } = props;

  useEffect(() => {
    idsArr.forEach((id) => {
      dispatch(getPokemon(id));
    });
  }, [dispatch]);

  if (error) return <p>Error Message: {error}</p>;

  return (
    <Wrapper>
      {[pokemonList].length > 0 ? (
        pokemonList.map((pokemon) => (
          <PokemonCardDetails key={pokemon.name} pokemon={pokemon} />
        ))
      ) : (
        <p> Loading … </p>
      )}
    </Wrapper>
  );
};

PokemonCards.propTypes = {
  idsArr: PropTypes.array.isRequired,
  pokemonList: PropTypes.array,
  error: PropTypes.string,
};

export default PokemonCards;
