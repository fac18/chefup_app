import React from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";
import "./index.css";
import "./App.css";
import createRecipe from "./pages/createRecipe";
import displayRecipe from "./pages/displayRecipe";
import profile from "./pages/profile";
import Home from "./pages/Home";
import aboutUs from "./pages/aboutUs";
import "typeface-roboto";
import "typeface-roboto-mono";
import { getRecipesData } from "./utils/getRecipesData";

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
        <Route path="/teach" component={withRouter(createRecipe)} />
        <Route path="/displayRecipe" component={withRouter(displayRecipe)} />
        <Route path="/profile" component={withRouter(profile)} />
        <Route path="/aboutUs" component={withRouter(aboutUs)} />
      </Switch>
    </Router>
  );
}

export default App;
