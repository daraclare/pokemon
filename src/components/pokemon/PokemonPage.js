import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import PropTypes from "prop-types";
import { getPokemon } from "../../redux/actions/pokemonActions";

const PokemonPage = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state);

  // const { user, error } = users;

  const { pokemon } = appState;

  console.log("pokemon", pokemon);

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  return (
    <div>
      <p>Pokemon Details:</p>
      {/* {error ? (
        <p>Error Message: {error}</p>
      ) : (
        <p>{user?.email ? user.email : "Loading …"}</p>
      )} */}
    </div>
  );
};

PokemonPage.propTypes = {
  // users: PropTypes.object.isRequired,
};

export default PokemonPage;
