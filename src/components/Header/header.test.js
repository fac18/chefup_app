import React from "react";
import { create } from "react-test-renderer";

const Header = props => {
  return <p>Header to be inserted</p>;
};

test("Footer matches the snapshot", () => {
  const header = create(<Header />);
  expect(header.toJSON()).toMatchSnapshot();
});
