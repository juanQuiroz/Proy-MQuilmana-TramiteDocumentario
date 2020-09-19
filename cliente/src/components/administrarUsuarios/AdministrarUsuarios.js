import React, { Fragment, useContext, useEffect } from "react";

import NavBar from "../layouts/Navbar";
import FormCrearUsuario from "./FormCrearUsuario";
import FormCambiarContraseña from "./FormCambiarContraseña";

const AdministrarUsuarios = () => {
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
