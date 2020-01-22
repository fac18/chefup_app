import React from "react";
import { create } from "react-test-renderer";

const RecipeCard = (props) => {
    return (
        <div>
            <p>Details: enter here</p>
            <p>My recipe details</p>
        </div>
        );
};

test("Footer matches the snapshot", () => {
    const recipecard = create(<RecipeCard />);
    expect(recipecard.toJSON()).toMatchSnapshot();
});
