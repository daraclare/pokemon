import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCards from "../PokemonCards/PokemonCards";
import { getPokemonList } from "../../redux/actions/pokemonActions";
import Button, { ButtonWrapper } from "../Buttons/Button";

const PokemonPage = () => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.pokemon);
  const { pokemonPage, error } = props;
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [pokemons, setPokemons] = useState(pokemonPage);

  useEffect(() => {
    setLoading(true);
    dispatch(getPokemonList(url));
    setLoading(false);
  }, [dispatch, url]);

  useEffect(() => {
    setLoading(true);
    setPokemons(pokemonPage);
    setLoading(false);
  }, [pokemonPage]);

  const handlePagination = (event) => {
    setUrl(pokemons[event.target.id]);
  };

  if (error) return <p>Error Message: {error}</p>;
  if (loading) return <p>Loading …</p>;

  return (
    <div>
      {pokemons && (
        <>
          <p>
            <b>Pokemon Total:</b> {pokemons.count}{" "}
          </p>
          <PokemonCards pokemonArray={pokemons.results} />
          <ButtonWrapper>
            <Button
              id="previous"
              handleClick={handlePagination}
              disabled={!pokemons.previous}
              buttonText={"Previous"}
            />
            <Button
              id="next"
              handleClick={handlePagination}
              disabled={!pokemons.next}
              buttonText={"Next"}
            />
          </ButtonWrapper>
        </>
      )}
    </div>
  );
};

PokemonPage.propTypes = {
  pokemonPage: PropTypes.object,
  error: PropTypes.string,
};

export default PokemonPage;
