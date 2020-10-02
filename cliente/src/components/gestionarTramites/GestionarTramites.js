import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";

import FormBuscarCodTra from "../buscarTramite/FormBuscarCodTra";
import ResultadoBusquedaG from "./ResultadoBusquedaG";

const GestionarTramites = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="bg-white shadow-md rounded mx-10 mt-10 px-6 pt-3 pb-8 mb-8">
        <h1 className="font-light text-4xl text-left text-green-500 mb-6">
          Eliminar trámite por código
        </h1>
        <div className="grid grid-cols-3 gap-2">
          <FormBuscarCodTra />
          <ResultadoBusquedaG />
        </div>
      </div>
    </Fragment>
  );
};

export default GestionarTramites;
