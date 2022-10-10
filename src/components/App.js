import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import UsersPage from "./users/UsersPage";
import PokemonPage from "./pokemon/PokemonPage";
import Pokemon from "./pokemon/Pokemon";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/pokemon" component={PokemonPage} />
        <Route exact path="/pokemon/:id" component={Pokemon} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
