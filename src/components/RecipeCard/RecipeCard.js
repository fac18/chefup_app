import React from "react";
import "./recipeCard.css";
import { getRecipesData } from "../../utils/getRecipesData";
import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 150px;
  width: 100%;
`;

const RecipeCard = () => {
  const [lessonData, setLessonData] = React.useState(null);

  React.useEffect(() => {
    getRecipesData().then(data =>
      setLessonData(
        data.records.map(lesson => ({
          title: lesson.fields.lesson_name,
          description: lesson.fields.lesson_description,
          teacher: lesson.fields.teacher,
          time: lesson.fields.time,
          duration: lesson.fields.lesson_duration,
          image_url: lesson.fields.main_recipe_image[0].url,
          ingredients: lesson.fields.ingredients,
          id: lesson.id
        }))
      )
    );
  }, []);

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
                <h2>{lesson.teacher}</h2>
                <p>{lesson.description}</p>
                <p>{lesson.time}</p>
                <p>{lesson.duration}</p>
                <p>{lesson.ingredients}</p>
              </div>
            </article>
          ))
        : null}
    </section>
  );
};

export default RecipeCard;
