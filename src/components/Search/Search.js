import React from "react";
import { ReactComponent as SearchIcon } from "../../icons/searchIconWhite.svg";
import "./search.css";
const SearchBar = () => {
  const [searchInput, setSearchInput] = React.useState(undefined);
  // we will need to have an extra function here to do a get request to our database
  // so that we can filter the search results as the user is typing

  return (
    <form>
      <input
        type="text"
        id="search"
        name="search"
        required
        value={searchInput}
        placeholder="Search by your favourite cuisine, ingredients or current location..."
        onChange={event => setSearchInput(event.target.value)}
      ></input>
      <button value="search">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
