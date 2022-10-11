import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCardDetails from "../PokemonCards/PokemonCardDetails";
import { getSinglePokemon } from "../../redux/actions/pokemonActions";

const RandomPokemon = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(Math.floor(Math.random() * 905) + 1);
  const props = useSelector((state) => state.pokemon);
  const { singlePokemon, error } = props;

  useEffect(() => {
    setLoading(true);
    dispatch(getSinglePokemon(id));
    setLoading(false);
  }, [dispatch, id]);

  const handleClick = () => {
    setId(Math.floor(Math.random() * 905) + 1);
  };

  if (error) return <p>Error Message: {error}</p>;

  if (loading) return <p>Loading …</p>;

  return (
    <>
      <button onClick={handleClick}>Get Random Pokemon</button>
      {singlePokemon && (
        <PokemonCardDetails singleCard={true} pokemon={singlePokemon} />
      )}
    </>
  );
};

RandomPokemon.propTypes = {
  singlePokemon: PropTypes.object,
  error: PropTypes.string,
};

export default RandomPokemon;
