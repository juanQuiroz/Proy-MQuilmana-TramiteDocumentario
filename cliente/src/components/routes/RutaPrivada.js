import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../context/autenticacion/authContext";

// Crear un highOrderComponent pasando component como parametro

const RutaPrivada = ({ component: Component, ...props }) => {
  const AuthContext = useContext(authContext);
  const { autenticado, cargando, ususarioAutenticado } = AuthContext;

  useEffect(() => {
    ususarioAutenticado();
  }, []);

  return (
    <Route
      {...props}
      render={props =>
        !autenticado && !cargando ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RutaPrivada;
