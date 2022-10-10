import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { POKEMON_COLOURS } from "../../consts";

const Wrapper = styled.article`
  min-width: 162px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    POKEMON_COLOURS[props.type] + "60"}; // add opacity to the background colour
`;

const StyledP = styled.p`
  text-transform: uppercase;
  text-align: center;
`;

const PokemonCardDetails = ({ pokemon }) => {
  const type = pokemon.types[0].type.name || "normal";
  return (
    <Wrapper type={type}>
      <StyledP>{pokemon.name}</StyledP>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <StyledP>ID: {pokemon.id}</StyledP>
      <StyledP>Type: {type}</StyledP>
    </Wrapper>
  );
};

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCardDetails;
