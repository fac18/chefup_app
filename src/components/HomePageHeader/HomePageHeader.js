import React from "react";
import "./homePageHeader.css";
import { ReactComponent as HomePageLogo } from "../../icons/logoImageWhite.svg";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import LoginModal from '../LoginModal/LoginModal'

const HomePageHeader = ({ searchInput, setSearchInput }) => {
  const [show, setShow] = React.useState(false);
        
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  


  return (
    <div className="homePageHeader">
      <div className="wrapper">
        <LoginModal show={show} handleClose={hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </LoginModal>
      <nav>
        <ul className="homePageNav">
          {/* <li>
            <Link className="list" to="/About">ABOUT US</Link>
          </li> */}
          <li className="list" onClick={showModal}>
            LOGIN
          </li>
          {/* <li>
            <Link className="signUp list" to="/SignUp">SIGN UP</Link>
          </li> */}
        </ul>
      </nav>
      <div ><HomePageLogo className="logo"/></div>
      <p className="tagLine"> Find a local chef and level up your cooking skills!</p>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </div>
  );
};

export default HomePageHeader;
