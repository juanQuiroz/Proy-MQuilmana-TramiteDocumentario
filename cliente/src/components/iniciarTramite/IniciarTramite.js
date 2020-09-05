import React, { Fragment } from "react";

import Navbar from "../layouts/Navbar";
import FormIniciarTramite from "./FormIniciarTramite";
import FormSubirArchivo from "./FormSubirArchivo";

const IniciarTramite = () => {
  return (
    <Fragment>
      <Navbar />
      <FormIniciarTramite />
      <FormSubirArchivo />
    </Fragment>
  );
};

export default IniciarTramite;
