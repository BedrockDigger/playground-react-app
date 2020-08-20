import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Navbar from './components/Navbar.js'
import PanoCover from "./components/PanoCover.js";
import PanoNum from './components/Num.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/cover'>
          <PanoCover />
        </Route>
        <Route exact path='/num'>
          <PanoNum />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
