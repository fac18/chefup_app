import React from "react";
import { create } from "react-test-renderer";

const FooterTest = (props) => {
    return <p>Nothing to do for now</p>;
};

test("Footer matches the snapshot", () => {
    const footer = create(<FooterTest />);
    expect(footer.toJSON()).toMatchSnapshot();
});
