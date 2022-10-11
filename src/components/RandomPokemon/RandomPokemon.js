import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCardDetails from "../PokemonCards/PokemonCardDetails";
import { getSinglePokemon } from "../../redux/actions/pokemonActions";
import Button, { ButtonWrapper } from "../Buttons/Button";

const RandomPokemon = () => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.pokemon);
  const { singlePokemon, error } = props;
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(Math.floor(Math.random() * 905) + 1);

  useEffect(() => {
    setLoading(true);
    dispatch(getSinglePokemon(id));
  }, [id]);

  useEffect(() => {
    if (singlePokemon && singlePokemon.id == id) {
      setLoading(false);
    }
  }, [props.singlePokemon]);

  const handleClick = () => {
    setLoading(true);
    setId(Math.floor(Math.random() * 905) + 1);
    setLoading(false);
  };

  if (error) return <p>Error Message: {error}</p>;

  if (loading) return <p>Loading …</p>;

  return (
    <>
      <ButtonWrapper>
        <Button
          id="randomise"
          handleClick={handleClick}
          disabled={loading}
          buttonText={"Get Random Pokemon"}
        />
      </ButtonWrapper>
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
