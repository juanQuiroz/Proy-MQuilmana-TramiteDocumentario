import React, { Fragment, useContext, useEffect } from "react";

import NavBar from "../layouts/Navbar";
import FormCrearUsuario from "./FormCrearUsuario";
import FormCambiarContraseña from "./FormCambiarContraseña";

import authContext from "../../context/autenticacion/authContext";

const AdministrarUsuarios = () => {
  // Context de autenticacion
  const AuthContext = useContext(authContext);
  const { recargarPagina } = AuthContext;

  useEffect(() => {
    recargarPagina();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div className="grid grid-cols-2">
        <FormCrearUsuario />
        <FormCambiarContraseña />
      </div>
    </Fragment>
  );
};

export default AdministrarUsuarios;
