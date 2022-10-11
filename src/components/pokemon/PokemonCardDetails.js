import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { POKEMON_COLOURS } from "../../consts";

const Wrapper = styled.article`
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 162px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ type }) =>
    POKEMON_COLOURS[type] + "75"}; // add opacity to the background colour
`;

const StyledImg = styled.img`
  height: 60%;
  width: 60%;
`;

const StyledP = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin: 4px;
  color: darkslategray;
`;

const PokemonCardDetails = ({ pokemon }) => {
  const type = pokemon.types[0].type.name || "normal";
  const images = pokemon.sprites.other["official-artwork"];
  return (
    <Wrapper type={type}>
      <StyledImg src={images.front_default} alt={`front of ${pokemon.name}`} />
      <StyledP>{pokemon.name}</StyledP>
      <StyledP>ID: {pokemon.id}</StyledP>
      <StyledP>Type: {type}</StyledP>
    </Wrapper>
  );
};

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCardDetails;
