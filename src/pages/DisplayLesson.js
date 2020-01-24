import React from 'react';
import Lesson from "../components/Lesson/Lesson";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useParams } from "react-router-dom";

const DisplayRecipe = ({lessonData}) => {
  let { id } = useParams();
  return(
    <div>
      <h1>ID: { id }</h1>
      <Header />
      <Lesson />
      <Footer />
    </div>
  )
}

export default DisplayRecipe