import React from "react";
import Lesson from "../components/Lesson/Lesson";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";

const DisplayRecipe = ({ lessonData }) => {
  let { id } = useParams();
  // Takes the id from the URL - refer to App.js to see where route path gets constructed.
  if (!lessonData) {
    return null;
  }
  const result = lessonData.filter(singleLesson => {
    return singleLesson.id === id;
  });

  return (
    <div>
      <Header />
      <Lesson result={result[0]} />
      <Footer />
    </div>
  );
};

export default DisplayRecipe;
