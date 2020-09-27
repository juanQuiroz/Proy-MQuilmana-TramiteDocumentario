import React from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
import Login from "./components/auth/Login";
import Principal from "./components/Principal";
import IniciarTramite from "./components/iniciarTramite/IniciarTramite";
import RecibirTramites from "./components/recibirTramites/RecibirTramites";
import AdministrarUsuarios from "./components/administrarUsuarios/AdministrarUsuarios";
import BuscarTramite from "./components/buscarTramite/BuscarTramite";
import DerivarTramites from "./components/derivarTramites/DerivarTramites";
import GestionarTramites from "./components/gestionarTramites/GestionarTramites";

// Providers
import AuthState from "./context/autenticacion/authState";
import AlertaState from "./context/alertas/alertaState";
import TramiteState from "./context/tramites/tramiteState";

// Tokenauth
import tokenAuth from "./config/tokenAuth";

// Importar ruta privada
import RutaPrivada from "./components/routes/RutaPrivada";

// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}
function App() {
  return (
    <AlertaState>
      <AuthState>
        <TramiteState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <RutaPrivada exact path="/principal" component={Principal} />
              <RutaPrivada
                exact
                path="/iniciar-tramite"
                component={IniciarTramite}
              />
              <RutaPrivada
                exact
                path="/recibir-tramites"
                component={RecibirTramites}
              />
              <RutaPrivada
                exact
                path="/administrar-usuarios"
                component={AdministrarUsuarios}
              />
              <RutaPrivada
                exact
                path="/Buscar-tramite"
                component={BuscarTramite}
              />
              <RutaPrivada
                exact
                path="/derivar-tramites"
                component={DerivarTramites}
              />
              <RutaPrivada
                exact
                path="/gestionarTramites"
                component={GestionarTramites}
              />
            </Switch>
          </Router>
        </TramiteState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
