import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCardDetails from "./PokemonCardDetails";
import { getSinglePokemon } from "../../redux/actions/pokemonActions";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 8px;
`;

const Pokemon = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const props = useSelector((state) => state.pokemon);
  const { singlePokemon, error } = props;

  useEffect(() => {
    dispatch(getSinglePokemon(id));
  }, [dispatch, id]);

  if (error)
    return id > 0 && id < 906 ? (
      <p>Error Message: {error}</p>
    ) : (
      <p>Please enter a number between 1 and 905</p>
    );

  return (
    <Wrapper>
      {singlePokemon ? (
        <PokemonCardDetails pokemon={singlePokemon} />
      ) : (
        <p>Loading …</p>
      )}
    </Wrapper>
  );
};

Pokemon.propTypes = {
  singlePokemon: PropTypes.object,
  error: PropTypes.string,
};

export default Pokemon;
