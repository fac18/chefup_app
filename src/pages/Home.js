import React from "react";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { getRecipesData } from "../utils/getRecipesData";

const Home = () => {
  getRecipesData();
  return (
    <div>
      <HomePageHeader />
      <Search />
      <RecipeCard />
    </div>
  );
};

export default Home;
