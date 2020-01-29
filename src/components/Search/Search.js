import React from "react";
import { ReactComponent as SearchIcon } from "../../icons/searchIconWhite.svg";
import { Form, Input } from "../CSSFormComponents";
import "./search.css";

const SearchBar = ({ searchInput, setSearchInput }) => {
  // we will need to have an extra function here to do a get request to our database
  // so that we can filter the search results as the user is typing
  return (
    <Form className="searchForm" inputDisplay="block">
      <Input
        type="text"
        id="search"
        name="search"
        required
        value={searchInput}
        placeholder="&#x1F50D; Search by your favourite cuisine..."
        onChange={event => setSearchInput(event.target.value)}
      ></Input>
      {/* <Button
        className="searchBtn"
        value="search"
        inputColor="var(--secondary-app-colour)"
        inputPadding="0"
      > */}

      {/* </Button> */}
    </Form>
  );
};

export default SearchBar;
