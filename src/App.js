import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "./index.css";
import "./App.css";
import CreateLesson from "./pages/CreateLesson";
import DisplayLesson from "./pages/DisplayLesson";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/LoginPage";
import "typeface-roboto";
import "typeface-roboto-mono";
import { getRecipesData } from "./utils/getRecipesData";
import SignUpPage from "./pages/SignUpPage";

function App() {
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
          id: lesson.id,
          lessonUrl: `/DisplayLesson/${lesson.id}`,
          price: lesson.fields.price,
          location: lesson.fields.location
        }))
      )
    );
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Home lessonData={lessonData} />)} />
        <Route path="/teach" render={() => (<CreateLesson />)} />
        <Route path="/DisplayLesson/:id" render={() => (<DisplayLesson lessonData={lessonData} />)} />
        <Route path="/ProfilePage" render={() => (<ProfilePage />)} />
        <Route path="/AboutPage" render={() => (<AboutPage />)} />
        <Route path="/Login" render={() => (<Login />)} />
        <Route path='/SignUp' render={() => (<SignUpPage />)} />
      </Switch>
    </Router>
  );
}

export default App;
