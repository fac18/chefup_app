import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ReactComponent as HomeIcon } from "../../icons/homeIconWhite.svg";
import { ReactComponent as TeachIcon } from "../../icons/teachIconWhite.svg";
import { ReactComponent as LearnIcon } from "../../icons/learnIconWhite.svg";
import { ReactComponent as InfoIcon } from "../../icons/infoIconWhite.svg";
// import { ReactComponent as ProfilePageIcon } from "../../icons/penEditIconPrimaryColour.svg";
// correct ProfilePage icon to be added here
const Footer = () => {
  return (
    <footer>
      <ul className="footer">
        <li>
          <Link aria-label="Home button" to="/">
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link aria-label="Teach button" to="/teach">
            <TeachIcon />
          </Link>
        </li>
        <li>
          <Link aria-label="About us button" to="/about">
            <InfoIcon />
          </Link>
        </li>
        {/* <li>
                        <Link to="/ProfilePage">Profile Page Icon</Link>
                    </li> */}
      </ul>
    </footer>
  );
};

export default Footer;
