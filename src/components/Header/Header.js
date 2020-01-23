import React from "react";
import "./header.css";
// import Logo from "../Logo/Logo";
import { ReactComponent as Logo } from "../../icons/logoTextWhite.svg";

const Header = () => {
  return (
    <div className="header">
      <Logo />
    </div>
  );
};

export default Header;
