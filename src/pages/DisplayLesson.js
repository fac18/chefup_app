import React from 'react';
import Lesson from "../components/Lesson/Lesson";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useParams } from "react-router-dom";

const DisplayRecipe = ({lessonData}) => {
  let { id } = useParams(); // Takes the id from the URL - refer to App.js to see where route path gets constructed.
  if (!lessonData) {
    return (<h3>loading...</h3>)
  }
  const result = lessonData.filter(singleLesson => {
    return singleLesson.id === id
  });
  
  
  return(
    <div>
      <h1>ID: { id }</h1>
      <Header />
      <Lesson result={ result }/>
      <Footer />
    </div>
  )
}

export default DisplayRecipe