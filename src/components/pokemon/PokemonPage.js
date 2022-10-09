import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonPage = () => {
  return (
    <div>
      <p>Pokemon Details:</p>
      <PokemonCard id={35} />
    </div>
  );
};

PokemonPage.propTypes = {};

export default PokemonPage;
