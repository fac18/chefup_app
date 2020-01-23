import React from "react";
import './recipeCard.css';
import { getRecipesData } from "../../utils/getRecipesData";

const RecipeCard = () => {
  const [lessonData, setLessonData] = React.useState(null);

  getRecipesData().then(data => {
  //    data.map(lesson => {console.log(lesson.id);
  //     return(lesson);
  //   });
  // }
    console.log('typeof data ', typeof(data))
    data.records.map(lesson => console.log('lesson id ',lesson.id))
  });

  if (lessonData === null) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  
  return (
    <div>
      <section className="class_image">
        <img src="" alt="class image" />
      </section>
      <section className="class_details">
        <section className="class_first_line">
          <img src="" alt="chef_image" />
          <section className="name_location_rating_container">
            <section class="name_location_container">
              <span className="chef_name"></span>
              <span className="class_location"></span>
            </section>
            <span className="class_rating"></span>
          </section>
          <span className="class_price"> </span>
        </section>
        <section className="class_second_line">
          <span className="class_name"></span>
        </section>
        <section className="class_third_line">
          <a className="class_link" href="url">
            learn more
          </a>
        </section>
      </section>
    </div>
  );
};

export default RecipeCard;
