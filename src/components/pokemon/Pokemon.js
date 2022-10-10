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

  if (error) return <p>Error Message: {error}</p>;

  return (
    <Wrapper>
      {singlePokemon && (
        <PokemonCardDetails pokemon={singlePokemon} backImage={true} />
      )}
    </Wrapper>
  );
};

Pokemon.propTypes = {
  singlePokemon: PropTypes.object,
  error: PropTypes.string,
};

export default Pokemon;
