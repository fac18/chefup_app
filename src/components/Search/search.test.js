import React from "react";
import { create } from "react-test-renderer";

const SearchTest = (props) => {
    return (
        <div>
            <p>Search for a lesson</p>
            <input type='text'>Search here</input>;
        </div>
        )
};

test("Footer matches the snapshot", () => {
    const search = create(<SearchTest />);
    expect(search.toJSON()).toMatchSnapshot();
});
