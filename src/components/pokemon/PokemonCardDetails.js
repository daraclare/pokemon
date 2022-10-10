import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.article`
  padding: 8px;
  margin: 8px;
  border: 1px solid purple;
`;

const PokemonCardDetails = ({ pokemon }) => {
  return (
    <Wrapper>
      <p>{pokemon.name}</p>
    </Wrapper>
  );
};

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCardDetails;
