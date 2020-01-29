import React from "react";
import "./lesson.css";
import { ImageContainer } from "../RecipeCard/css-components";
import { H1 } from "../../App.style";
const Lesson = ({ result }) => {
  console.log(result);

  return (
    <div>
      {result ? (
        <div className="lessonPage_lesson-details">
          <H1>{result.title}</H1>
          <h2>
            {result.teacher}, {result.location}, £{result.price}
          </h2>
          <p>{result.description}</p>
          <p>{result.time}</p>
          <p>{result.duration}</p>
          <p>{result.ingredients}</p>
          <ImageContainer
            imageUrl={result.image_url}
            alt={result.title}
            height="50vh"
          ></ImageContainer>
        </div>
      ) : null}
    </div>
  );
};

export default Lesson;
