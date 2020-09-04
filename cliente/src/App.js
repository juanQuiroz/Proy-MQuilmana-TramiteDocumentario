import React from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Principal from "./components/Principal";
import IniciarTramite from "./components/iniciarTramite/IniciarTramite";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/principal" component={Principal} />
        <Route exact path="/iniciar-tramite" component={IniciarTramite} />
      </Switch>
    </Router>
  );
}

export default App;
