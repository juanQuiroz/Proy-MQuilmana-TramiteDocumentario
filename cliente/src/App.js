import React from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Principal from "./components/Principal";
import IniciarTramite from "./components/iniciarTramite/IniciarTramite";
import RecibirTramites from "./components/recibirTramites/RecibirTramites";

function App() {
  // setInterval(() => {
  //   const hora2 = new Date();
  //   console.log(hora2);
  //   console.log(Date.parse(hora2));
  // }, 100);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/principal" component={Principal} />
        <Route exact path="/iniciar-tramite" component={IniciarTramite} />
        <Route exact path="/recibir-tramites" component={RecibirTramites} />
      </Switch>
    </Router>
  );
}

export default App;
