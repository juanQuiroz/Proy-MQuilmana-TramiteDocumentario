import React from "react";
import "./assets/main.css";

import Home from "./components/Home";
import Busqueda from "./components/Busqueda";

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Busqueda" component={Busqueda} />
      </Switch>
    </Router>
  );
}

export default App;
