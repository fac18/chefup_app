import React from "react";
import { render } from "@testing-library/react";
import RecipeCard from "./RecipeCard";

test("RecipeCard component renders correctly", () => {
  const { findByTestId } = render(<RecipeCard />);
  findByTestId("rec8oKeNrianbq65v");
});
