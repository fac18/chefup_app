import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { getRecipesData } from "../utils/getRecipeData";

const Home = () => {
  getRecipesData();
  return (
    <div>
      <Header />
      <Search />
      <RecipeCard />
      <Footer />
    </div>
  );
};

export default Home;
