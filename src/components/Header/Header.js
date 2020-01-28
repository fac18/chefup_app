import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
// import Logo from "../Logo/Logo";
import { ReactComponent as Logo } from "../../icons/logoTextWhite.svg";

const Header = () => {
  return (
    <div className="header">
      <Logo> <Link to="/" /> </Logo>
    </div>
  );
};

export default Header;
