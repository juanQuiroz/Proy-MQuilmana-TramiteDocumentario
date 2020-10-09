import React from "react";
import logo from "./logo.svg";
import "./assets/main.css";

import Home from "./components/Home";
import Busqueda from "./components/Busqueda";

import Resultado from "./components/Resultado";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resultado" component={Resultado} />
        <Route exact path="/Busqueda" component={Busqueda} />
      </Switch>
    </Router>
  );
}

export default App;
