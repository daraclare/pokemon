import React from "react";
import PokemonCards from "./PokemonCards";

import styled from "styled-components";

const CardWrapper = styled.article`
  padding: 8px;
  border: 1px solid red;
`;

const PokemonPage = () => {
  return (
    <CardWrapper>
      <PokemonCards idsArr={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    </CardWrapper>
  );
};

PokemonPage.propTypes = {};

export default PokemonPage;
