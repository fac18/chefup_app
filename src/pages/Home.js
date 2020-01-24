import React from "react";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import Search from "../components/Search/Search";
import RecipeCard from "../components/RecipeCard/RecipeCard";

const Home = ({lessonData}) => {
  
  return (
    <div>
      <HomePageHeader />
      <Search />
      <RecipeCard lessonData={lessonData} />
    </div>
  );
};

export default Home;
