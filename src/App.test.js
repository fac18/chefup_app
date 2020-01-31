import React from "react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  const token = process.env.REACT_APP_TOKEN;

  if (token) {
    const { container, getByLabelText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(container.textContent).toBe(
      "Welcome back Welcome to  logoTextBlack.svgLog inCloseLOGINlogoImageWhite.svg Find a local chef and level up your cooking skills!Explore recipesNeed some help deciding what dish to learn? Check out the latest dishes added to the site below, or use the search bar above to filter by keyword.Welcome back Welcome to  logoTextBlack.svgLog inClosehomeIconWhite.svgteachIconWhite.svginfoIconWhite.svg"
    );

    // redirect to About Us page
    fireEvent.click(getByLabelText(/About us button/i));

    // check that the content changed to the new page
    expect(container.textContent).toMatch(/about us/i);
  }
});
