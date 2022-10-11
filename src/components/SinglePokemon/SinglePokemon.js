import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCardDetails from "../PokemonCards/PokemonCardDetails";
import { getSinglePokemon } from "../../redux/actions/pokemonActions";

const SinglePokemon = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const props = useSelector((state) => state.pokemon);
  const { singlePokemon, error } = props;

  useEffect(() => {
    setLoading(true);
    dispatch(getSinglePokemon(id));
    setLoading(false);
  }, [dispatch, id]);

  if (error)
    return id > 0 && id < 906 ? (
      <p>Error Message: {error}</p>
    ) : (
      <p>Please enter a number between 1 and 905</p>
    );

  if (loading) return <p>Loading …</p>;

  return (
    <>
      {singlePokemon && (
        <PokemonCardDetails singleCard={true} pokemon={singlePokemon} />
      )}
    </>
  );
};

SinglePokemon.propTypes = {
  singlePokemon: PropTypes.object,
  error: PropTypes.string,
};

export default SinglePokemon;
