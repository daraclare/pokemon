import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/pokemon" exact>
        Pokedex
      </NavLink>
      {" | "}
      <NavLink to="/random" exact>
        Random Pokemon
      </NavLink>
    </nav>
  );
};

export default Header;
