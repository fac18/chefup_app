import React from "react";
import { create } from "react-test-renderer";

const Search = props => {
  return (
    <div>
      <p>Search for a lesson</p>
      <input type="text">Search here</input>;
    </div>
  );
};

test("Footer matches the snapshot", () => {
  const search = create(<Search />);
  expect(search.toJSON()).toMatchSnapshot();
});
