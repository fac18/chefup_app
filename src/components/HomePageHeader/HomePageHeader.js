import React from "react";
import "./homePageHeader.css";
import { ReactComponent as HomePageLogo } from "../../icons/logoImageWhite.svg";
import Search from "../Search/Search";
import LoginModal from "../LoginModal/LoginModal";

const HomePageHeader = ({ searchInput, setSearchInput }) => {
  const [show, setShow] = React.useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  // for future iterations we would like to include a authorisation and create users
  // <LoginModal show={show} handleClose={hideModal}>
  //   <p>Modal</p>
  //   <p>Data</p>
  // </LoginModal>
  // <nav>
  //   <ul className="homePageNav">
  //     <li>
  //       <Link className="list" to="/About">
  //         ABOUT US
  //       </Link>
  //     </li>
  //     <li className="list" onClick={showModal}>
  //       LOGIN
  //     </li>
  //     <li>
  //       <Link className="signUp list" to="/SignUp">
  //         SIGN UP
  //       </Link>
  //     </li>
  //   </ul>
  // </nav>

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
      <p className="explore">
      <h1>Explore recipes</h1>
      Need some help deciding what dish to learn? <br />Check out the latest dishes added to the site below,<br/> or use the search bar above to filter by keyword.
      </p>
      </div>
    </div>
  );
};

export default HomePageHeader;
