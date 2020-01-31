import React from "react";
import Lesson from "../components/Lesson/Lesson";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import BookLessonForm from "../components/BookLessonForm/BookLessonForm";
import './pages_css/aboutpage.css';

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
    <div className="bkg">
      <Header />
      <div className="container">
      <Lesson result={result[0]} />
      <BookLessonForm />
      </div>
      <Footer />
    </div>
  );
};

export default DisplayRecipe;
