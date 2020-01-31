import React from "react";
import "./lesson.css";
import { ImageContainer } from "../RecipeCard/css-components";
// import { H1 } from "../../App.style";
const Lesson = ({ result }) => {
  console.log(result);

  return (
    // https://www.bbcgoodfood.com/recipes/chicken-cacciatore-one-pot-orzo
    <div>
      {result ? (
        <div className="lessonPage_lesson-details">
          <h1>{result.title}</h1>
          <h2>
            <span className="margin-bottom">Details: </span>
            {result.teacher}, {result.location}, £{result.price}
          </h2>
          <p><span>Description: </span>{result.description}</p>
          <p><span>Time: </span>{result.time}</p>
          <p className="margin-bottom"><span>Duration: </span>{result.duration}</p>
          <p className="margin-bottom"><span>Ingredients: </span>{result.ingredients}</p>
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
