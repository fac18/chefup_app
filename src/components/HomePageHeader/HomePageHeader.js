import React from "react";
import "./homePageHeader.css";
import { ReactComponent as HomePageLogo } from "../../icons/logoImageWhite.svg";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const HomePageHeader = ({ searchInput, setSearchInput }) => {
  return (
    <div className="homePageHeader">
      <div className="wrapper">
      <nav>
        <ul className="homePageNav">
          <li>
            <Link className="list" to="/About">ABOUT US</Link>
          </li>
          <li>
            <Link className="list" to="/Login">LOGIN</Link>
          </li>
          <li>
            <Link className="signUp" to="/SignUp">SIGN UP</Link>
          </li>
        </ul>
      </nav>
      <div ><HomePageLogo className="logo"/></div>
      <p>Find a local chef and level up your cooking skills!</p>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </div>
  );
};

export default HomePageHeader;
