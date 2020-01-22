import React from "react";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "./index.css";
import "./App.css";
import createRecipe from './pages/createRecipe';
import displayRecipe from './pages/displayRecipe';
import profile from './pages/profile'
import Home from './pages/Home'
import "typeface-roboto";
import "typeface-roboto-mono";

function App() {
  return (
    <Router>
          <Route exact path='/' component={Home} />
          <Route path='/teach' component={createRecipe} />
          <Route path='/displayRecipe' component={displayRecipe} />
          <Route path='/profile' component={profile} />
  </Router>
  );
}



export default App;
