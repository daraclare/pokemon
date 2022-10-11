import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import PokemonPage from "./PokemonPage/PokemonPage";
import SinglePokemon from "./SinglePokemon/SinglePokemon";
import { createGlobalStyle } from "styled-components";
import RandomPokemon from "./RandomPokemon/RandomPokemon";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, san-serif;
  }
  a {
   color: slategrey;
  }
  a:active {
   color: red;
  }
  a:link {
    text-decoration: none;
  }
  #app {
    max-width: 850px;
    margin: 0 auto;
  }
  nav {
    padding: 20px;
    text-align: center;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pokemon" component={PokemonPage} />
        <Route exact path="/pokemon/:id" component={SinglePokemon} />
        <Route exact path="/random" component={RandomPokemon} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
