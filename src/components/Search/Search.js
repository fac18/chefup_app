import React from "react";
import { ReactComponent as SearchIcon } from "../../icons/searchIconWhite.svg";
import "./search.css";
const SearchBar = () => {
  const [searchInput, setSearchInput] = React.useState(undefined);
  const handleChange = event => {
    event.preventDefault();
    setSearchInput(event.value);
  };
  return (
    <form>
      <input
        type="text"
        id="search"
        name="search"
        required
        value={searchInput}
        onChange={handleChange}
      ></input>
      <button value="search">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
