import React from "react";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import LoginModal from '../components/LoginModal/LoginModal'
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Footer from "../components/Footer/Footer";

const Home = ({ lessonData, show, setShow, setLogin }) => {
  const [searchInput, setSearchInput] = React.useState(undefined);
  // const [show, setShow] = React.useState(false);
        

  return (
    <div>
      <div>
        <HomePageHeader
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <LoginModal show={show} setShow={setShow} login={setLogin}/>

        <RecipeCard searchInput={searchInput} lessonData={lessonData} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
