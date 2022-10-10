import React from "react";
import PokemonCard from "./PokemonCard";

import styled from "styled-components";

const CardWrapper = styled.article`
  padding: 8px;
  border: 1px solid red;
  display: flex;
`;

const PokemonPage = () => {
  return (
    <CardWrapper>
      <PokemonCard id={35} />
    </CardWrapper>
  );
};

PokemonPage.propTypes = {};

export default PokemonPage;
