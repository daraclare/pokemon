import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import PokemonPage from "./pokemon/PokemonPage";
import Pokemon from "./pokemon/Pokemon";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, san-serif;
  }
  #app {
    max-width: 850px;
    margin: 0 auto;
  }
  nav {
    padding: 20px 0 20px 0;
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
        <Route exact path="/pokemon/:id" component={Pokemon} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
