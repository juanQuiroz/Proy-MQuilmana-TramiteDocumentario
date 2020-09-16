import React, { Fragment } from "react";

import NavBar from "../layouts/Navbar";
import FormCrearUsuario from "./FormCrearUsuario";

const AdministrarUsuarios = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="grid grid-cols-2">
        <FormCrearUsuario />
      </div>
    </Fragment>
  );
};

export default AdministrarUsuarios;
