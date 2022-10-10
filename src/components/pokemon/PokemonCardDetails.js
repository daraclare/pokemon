import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { POKEMON_COLOURS } from "../../consts";

const Wrapper = styled.article`
  padding: 16px;
  border: 1px solid lightgrey;
  background-color: ${(props) =>
    POKEMON_COLOURS[props.type] + "60"}; // add opacity to the background colour
`;

const Name = styled.p`
  text-transform: uppercase;
  text-align: center;
`;

const Id = styled.p`
  text-transform: uppercase;
  text-align: center;
`;

const PokemonCardDetails = ({ pokemon }) => {
  const type = pokemon.types[0].type.name || "normal";
  return (
    <Wrapper type={type}>
      <Name>{pokemon.name}</Name>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Id>{pokemon.id}</Id>
      <Id>{type}</Id>
    </Wrapper>
  );
};

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCardDetails;
