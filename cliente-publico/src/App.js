import React from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Buscar from "./components/Buscar";
import Resultado from "./components/Resultado";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/buscar" component={Buscar} />
        <Route exact path="/resultado" component={Resultado} />
      </Switch>
    </Router>
  );
}

export default App;
