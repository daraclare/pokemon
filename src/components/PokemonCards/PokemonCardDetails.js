import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { POKEMON_COLOURS } from "../../consts";

const Wrapper = styled.article`
  padding: 16px;
  display: flex;
  flex-direction: column;
  ${({ singleCard }) => !singleCard && "width: 162px;"};
  border-radius: 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ type }) =>
    POKEMON_COLOURS[type] + "75"}; // add opacity to the background colour
  min-height: 210px;
  :hover {
    background-color: ${({ type, singleCard }) =>
      !singleCard &&
      POKEMON_COLOURS[type] + "95"}; // add opacity to the background colour
  }
`;

const StyledImg = styled.img`
  width: 60%;
  height: 60%;
`;

const StyledP = styled.p`
  text-transform: capitalize;
  text-align: center;
  margin: 4px;
  color: darkslategray;
`;

const PokemonCardDetails = ({ pokemon, singleCard }) => {
  const type = pokemon.types[0].type.name || "normal";
  const images = pokemon.sprites.other["official-artwork"];
  return (
    <Wrapper singleCard={singleCard} type={type}>
      <StyledImg
        singleCard={singleCard}
        src={images.front_default}
        alt={`Front of ${pokemon.name}`}
      />
      <StyledP>{pokemon.name}</StyledP>
      <StyledP>#{pokemon.id}</StyledP>
      <StyledP>Type: {type}</StyledP>
    </Wrapper>
  );
};

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
  singleCard: PropTypes.bool.isRequired,
};

export default PokemonCardDetails;
