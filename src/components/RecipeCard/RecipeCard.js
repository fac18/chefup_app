import React from "react";
import "./recipeCard.css";
import { getRecipesData } from "../../utils/getRecipesData";
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
  return (
    <section className="recipes">
      {lessonData
        ? lessonData.map(lesson => (
            <article data-testid={lesson.id} className="recipes_recipeCard">
              <div className="recipes_lesson-details">
                <img
                  className="recipe_image"
                  src={lesson.image_url}
                  alt={lesson.title}
                />

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
