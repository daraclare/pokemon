import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PokemonCards from "../PokemonCards/PokemonCards";
import { getPokemonList } from "../../redux/actions/pokemonActions";
import Button, { ButtonWrapper } from "../Buttons/Button";
import styled from "styled-components";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const PokemonPage = () => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.pokemon);
  const { pokemonPage, error } = props;
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  useEffect(() => {
    setLoading(true);
    dispatch(getPokemonList(url));
    setLoading(false);
  }, [dispatch, url]);

  const handlePagination = (event) => {
    setUrl(pokemonPage.pageDetails[event.target.id]);
  };

  if (error) return <p>Error Message: {error}</p>;
  if (loading) return <p>Loading …</p>;

  return (
    <div>
      {pokemonPage && (
        <>
          <Wrapper>
            {pokemonPage.pokemons.length > 0 &&
              pokemonPage.pokemons.map(({ data }) => {
                return (
                  <ErrorBoundary
                    key={data.id}
                    fallback_message="This card is broken, please refresh"
                  >
                    <PokemonCards pokemon={data} loading={loading} />
                  </ErrorBoundary>
                );
              })}
          </Wrapper>

          <ButtonWrapper>
            <Button
              id="previous"
              handleClick={handlePagination}
              disabled={!pokemonPage.pageDetails.previous}
              buttonText={"Previous"}
            />
            <Button
              id="next"
              handleClick={handlePagination}
              disabled={!pokemonPage.pageDetails.next}
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
