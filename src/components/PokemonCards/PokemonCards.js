import React from "react";
import PropTypes from "prop-types";
import PokemonCardDetails from "./PokemonCardDetails";
import { Link } from "react-router-dom";

const PokemonCards = ({ pokemon, loading }) => {
  if (loading) return <p>Loading …</p>;
  return (
    <>
      {pokemon && (
        <Link to={`/pokemon/${pokemon.id}`}>
          <PokemonCardDetails singleCard={false} pokemon={pokemon} />
        </Link>
      )}
    </>
  );
};

PokemonCards.propTypes = {
  pokemon: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PokemonCards;
