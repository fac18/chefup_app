import React from "react";
import "./recipeCard.css";
import { filterByInput } from "../../utils/filterByInput";
import { ImageContainer } from "./css-components";

const RecipeCard = ({ searchInput, lessonData }) => {
  if (lessonData === null) {
    return null;
  }
  return (
    <section className="recipes">
      {searchInput
        ? filterByInput(searchInput, lessonData).map(lesson => (
            <article data-testid={lesson.id} className="recipes_recipeCard">
              <div className="recipes_lesson-details">
                <ImageContainer
                  imageUrl={lesson.image_url}
                  alt={lesson.title}
                ></ImageContainer>

                <h1>{lesson.title}</h1>
                <h2>
                  {lesson.teacher}, {lesson.location}, £{lesson.price}
                </h2>
                {/* <p>{lesson.description}</p>
                <p>{lesson.time}</p>
                <p>{lesson.duration}</p>
                <p>{lesson.ingredients}</p> */}
                <a href={lesson.lessonUrl}>LEARN MORE</a>
              </div>
            </article>
          ))
        : lessonData.map(lesson => (
            <article data-testid={lesson.id} className="recipes_recipeCard">
              <div className="recipes_lesson-details">
                <ImageContainer
                  imageUrl={lesson.image_url}
                  alt={lesson.title}
                ></ImageContainer>

                <h1>{lesson.title}</h1>
                <h2>
                  {lesson.teacher}, {lesson.location}, £{lesson.price}
                </h2>
                {/* <p>{lesson.description}</p>
                <p>{lesson.time}</p>
                <p>{lesson.duration}</p>
                <p>{lesson.ingredients}</p> */}
                <a href={lesson.lessonUrl}>LEARN MORE</a>
              </div>
            </article>
          ))}
    </section>
  );
};

export default RecipeCard;
