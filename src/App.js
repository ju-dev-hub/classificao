import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Pets from './pages/Pets';
import Login from './pages/Login';
import Register from './pages/Register';

import React from 'react';
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/pets/:id">
            <Pets />
          </Route>

          <Route path="/projetos/:id">
            <Projects/>  
          </Route>

          <Route path="/cadastro">
            <Register/>  
          </Route>

          <Route path="/login">
            <Login/>  
          </Route>        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
