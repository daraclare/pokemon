import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import PropTypes from "prop-types";
import { getPokemon } from "../../redux/actions/pokemonActions";

const PokemonPage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);

  const { pokemon, error } = pokemons;

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  return (
    <div>
      <p>Pokemon Details:</p>
      {error ? (
        <p>Error Message: {error}</p>
      ) : pokemon ? (
        pokemon.map((poke) => {
          return <p key={poke.name}>{poke.name}</p>;
        })
      ) : (
        <p>loading…</p>
      )}
    </div>
  );
};

PokemonPage.propTypes = {};

export default PokemonPage;
