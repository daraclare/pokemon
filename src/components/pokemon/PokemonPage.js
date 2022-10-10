import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCards from "./PokemonCards";
import { getPokemonList } from "../../redux/actions/pokemonActions";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 8px;
  border: 1px solid grey;
`;

const PokemonPage = () => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.pokemon);
  const { pokemonPage, error } = props;

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  if (error) return <p>Error Message: {error}</p>;

  return (
    <Wrapper>
      {pokemonPage ? (
        <>
          <p>Number of pokemon: {pokemonPage.count} </p>
          <PokemonCards pokemonArray={pokemonPage.results} />
        </>
      ) : (
        <p>Loading … </p>
      )}
    </Wrapper>
  );
};

PokemonPage.propTypes = {
  pokemonPage: PropTypes.object,
  error: PropTypes.string,
};

export default PokemonPage;
