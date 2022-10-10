import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCardDetails from "./PokemonCardDetails";
import { getPokemon } from "../../redux/actions/pokemonActions";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 8px;
  img {
    max-width: 200px;
  }
`;

const Pokemon = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const props = useSelector((state) => state.pokemon);
  const { pokemonList, error } = props;

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch, id]);

  if (error) return <p>Error Message: {error}</p>;

  return (
    <Wrapper>
      {pokemonList.length > 0 && (
        <PokemonCardDetails pokemon={pokemonList[0]} backImage={true} />
      )}
    </Wrapper>
  );
};

Pokemon.propTypes = {
  pokemonList: PropTypes.array,
  error: PropTypes.string,
};

export default Pokemon;
