import React from "react";
import "./lesson.css";

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
          <h1>{result.title}</h1>
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
