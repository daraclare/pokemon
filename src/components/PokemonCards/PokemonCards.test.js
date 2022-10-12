/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PokemonCards from "./PokemonCards";
import { MockPokemon } from "../../mocks/mockPokemon";

test("card component renders correctly", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <PokemonCards pokemon={MockPokemon} />
    </BrowserRouter>
  );

  expect(getByTestId("squirtle-card")).toHaveStyle(
    `background-color:  rgba(99, 144, 240, 0.459)`
  );
  expect(getByTestId("squirtle-name")).toHaveTextContent("squirtle");
  expect(getByTestId("squirtle-id")).toHaveTextContent("#7");
  expect(getByTestId("squirtle-type")).toHaveTextContent("Type: water");
});
