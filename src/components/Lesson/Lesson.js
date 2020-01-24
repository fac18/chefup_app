import React from "react";
import './lesson.css';

{/* <LessonHeader {lesson.image_url, lesson.title, lesson.teacher, lesson.price}/>
<p>{lesson.description}</p>
<p>{lesson.time}</p>
<p>{lesson.duration}</p>
<p>{lesson.ingredients}</p> */}
const Lesson = () => {
  return (
    
    <div className="image_container">
      <div className="lesson_header">
        <div className="lesson_title_level">
          <div className="lesson_title">
            <p>Spaghetti and meatballs</p>
          </div>
          <div className="lesson_level">
            <p>Level: beginner</p>
          </div>
        </div>
        <div className="lesson_price">
          <p>£25</p>
        </div>
      </div>
    </div>

    
  )
}

export default Lesson;