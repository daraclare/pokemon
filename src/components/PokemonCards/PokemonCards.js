import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getPokemon } from "../../redux/actions/pokemonActions";
import styled from "styled-components";
import PokemonCardDetails from "./PokemonCardDetails";

import { Link } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const PokemonCards = ({ pokemonArray }) => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.pokemon);
  const [loading, setLoading] = useState(true);
  const { pokemonList = [], error } = props;

  useEffect(() => {
    setLoading(true);
    pokemonArray.forEach((pokemon) => {
      dispatch(getPokemon(pokemon.name));
    });
    setLoading(false);
  }, [dispatch, pokemonArray]);

  if (error) return <p>Error Message: {error}</p>;

  if (loading) return <p>Loading …</p>;

  return (
    <Wrapper>
      {pokemonList.length > 0 &&
        pokemonList.map((pokemon) => (
          <Link
            style={{ textDecoration: "none" }}
            key={pokemon.name}
            to={`/pokemon/${pokemon.id}`}
          >
            <PokemonCardDetails
              singleCard={false}
              key={pokemon.name}
              pokemon={pokemon}
            />
          </Link>
        ))}
    </Wrapper>
  );
};

PokemonCards.propTypes = {
  pokemonArray: PropTypes.array.isRequired,
  pokemonList: PropTypes.array,
  error: PropTypes.string,
};

export default PokemonCards;
