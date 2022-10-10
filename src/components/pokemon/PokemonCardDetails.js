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
  margin: 4px;
  color: darkslategray;
  text-decoration: none;
`;

const PokemonCardDetails = ({ pokemon, backImage }) => {
  const type = pokemon.types[0].type.name || "normal";

  return (
    <Wrapper type={type}>
      <div>
        <img
          src={pokemon.sprites.front_default}
          alt={`front of ${pokemon.name}`}
        />
        {backImage && (
          <img
            src={pokemon.sprites.back_default}
            alt={`back of ${pokemon.name}`}
          />
        )}
      </div>

      <StyledP>{pokemon.name}</StyledP>
      <StyledP>ID: {pokemon.id}</StyledP>
      <StyledP>Type: {type}</StyledP>
    </Wrapper>
  );
};

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
  backImage: PropTypes.bool,
};

export default PokemonCardDetails;
