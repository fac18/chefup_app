import React from "react";
import "./homePageHeader.css";
import { ReactComponent as HomePageLogo } from "../../icons/logoImageWhite.svg";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const HomePageHeader = ({ searchInput, setSearchInput }) => {
  return (
    <div className="homePageHeader">
      <nav>
        <ul className="homePageNav">
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <HomePageLogo />
      <p>Find a local chef and level up your cooking skills!</p>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
};

export default HomePageHeader;
