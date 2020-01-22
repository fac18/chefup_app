import React from "react";
import { create } from "react-test-renderer";

const HeaderTest = (props) => {
    return <p>Header to be inserted</p>;
};

test("Footer matches the snapshot", () => {
    const header = create(<HeaderTest />);
    expect(header.toJSON()).toMatchSnapshot();
});
