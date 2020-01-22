import React from "react";
import { create } from "react-test-renderer";

const Footer = (props) => {
    return <p>Nothing to do for now</p>;
};

test("Footer matches the snapshot", () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
});
