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
          image: lesson.fields.main_recipe_image[0].url
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
            <article className="recipeCard">
              <img src = {lesson.image} />
              <div className="class_details">
                <h2 className="class_first_line">{lesson.title}</h2>
              </div>
            </article>
          ))
        : null}
    </section>
  );
};



export default RecipeCard;
