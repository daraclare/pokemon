import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "purple" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle} exact>
        About
      </NavLink>
      {" | "}
      <NavLink to="/pokemon" activeStyle={activeStyle} exact>
        Pokedex
      </NavLink>
    </nav>
  );
};

export default Header;
