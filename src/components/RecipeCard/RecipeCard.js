import React from "react";
import "./recipeCard.css";

import { ImageContainer } from "./css-components";

const RecipeCard = ({lessonData}) => {

  if (lessonData === null) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  // lessonData.forEach(element => {
  //   // console.log('lesson description ', element.fields.lesson_description)
  //   console.log('lesson description', element.lesson_description);
  // });
  //{" <div className="recipe_image-container">"}
  //{"</div> "}
  return (
    <section className="recipes">
      {lessonData
        ? lessonData.map(lesson => (
          
            <article data-testid={lesson.id} className="recipes_recipeCard">
              <div className="recipes_lesson-details">
                <ImageContainer
                  imageUrl={lesson.image_url}
                  alt={lesson.title}
                ></ImageContainer>


                <h1>{lesson.title}</h1>
                <h2>{lesson.teacher}, {lesson.location}, £{lesson.price}</h2>
                {/* <p>{lesson.description}</p>
                <p>{lesson.time}</p>
                <p>{lesson.duration}</p>
                <p>{lesson.ingredients}</p> */}
                <a href={lesson.lessonUrl}>LEARN MORE</a>
              </div>
            </article>
          ))
        : null}
    </section>
  );
};

export default RecipeCard;
