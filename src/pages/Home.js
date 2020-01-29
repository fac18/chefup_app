import React from "react";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import Search from "../components/Search/Search";
import RecipeCard from "../components/RecipeCard/RecipeCard";

const Home = ({ lessonData }) => {
  const [searchInput, setSearchInput] = React.useState(undefined);

  return (
    <div>
      <HomePageHeader searchInput={searchInput} setSearchInput={setSearchInput} />
      <RecipeCard searchInput={searchInput} lessonData={lessonData} />
    </div>
  );
};

export default Home;
