import React from "react";
import "./lesson.css";
import { H1 } from '../../App.style'

const Lesson = ({ result }) => {
  console.log(result);
  // <ImageContainer
  //   imageUrl={result.image_url}
  //   alt={result.title}
  // ></ImageContainer>
  return (
    <div className="recipes_lesson-details">
      {result ? (
        <div>
          <H1>{result.title}</H1>
          <h2>
            {result.teacher}, {result.location}, £{result.price}
          </h2>
          <p>{result.description}</p>
          <p>{result.time}</p>
          <p>{result.duration}</p>
          <p>{result.ingredients}</p>
          <a href={result.lessonUrl}>LEARN MORE</a>
        </div>
      ) : null}
    </div>
  );
};

export default Lesson;
