import React from "react";
import "./recipeCard.css";
import { getRecipesData } from "../../utils/getRecipesData";

const RecipeCard = () => {
  const [lessonData, setLessonData] = React.useState(null);

  React.useEffect(()=> {
    getRecipesData().then(data => setLessonData(data));
  }, []);
  console.log("This is lessonData", lessonData);
  // getRecipesData().then(data => {
  //   data.records.map(lesson => {
  //     console.log(lesson.fields.lesson_name);
  //     setLessonData({
  //       title: lesson.fields.lesson_name,
  //       description: lesson.fields.lesson_description,
  //       teacher: lesson.fields.teacher,
  //       time: lesson.fields.time,
  //       duration: lesson.fields.lesson_duration
  //     });
  //     return;
  //   });
  // });
  // console.log(lessonData.title);
  // if (lessonData === null) {
  //   return (
  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <section className="recipes">
      <article className="recipeCard">
        <div className="class_details">
          {/* <p className="class_first_line" value={lessonData.title}></p> */}
        </div>
      </article>
    </section>
  );
};
// <img src="" alt="class image" />
//     <img src="" alt="chef_image" />
//     <section className="name_location_rating_container">
//       <section class="name_location_container">
//         <span className="chef_name"></span>
//         <span className="class_location"></span>
//       </section>
//       <span className="class_rating"></span>
//     </section>
//     <span className="class_price"> </span>
//   </section>
//   <section className="class_second_line">
//     <span className="class_name"></span>
//   </section>
//   <section className="class_third_line">
//     <a className="class_link" href="url">
//       learn more
//     </a>
//   </section>
// </section>

export default RecipeCard;
