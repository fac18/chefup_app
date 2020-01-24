import React from "react";
import { Route, Link, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import "./index.css";
import "./App.css";
import createRecipe from "./pages/createRecipe";
import displayRecipe from "./pages/displayRecipe";
import profile from "./pages/profile";
import Home from "./pages/Home";
import aboutUs from "./pages/aboutUs";
import "typeface-roboto";
import "typeface-roboto-mono";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/teach" component={createRecipe} />
      <Route path="/displayRecipe" component={displayRecipe} />
      <Route path="/profile" component={profile} />
      <Route path="/aboutUs" component={aboutUs} />
    </Router>
      <Switch>
          <Route exact path='/' component={withRouter(Home)} />
          <Route path='/teach' component={withRouter(createRecipe)} />
          <Route path='/displayRecipe' component={withRouter(displayRecipe)} />
          <Route path='/profile' component={withRouter(profile)} />
          <Route path='/aboutUs' component={withRouter(aboutUs)} />
      </Switch>
  </Router>
  );
}

export default App;
