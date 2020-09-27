import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";

import FormBuscarCodExp from "../buscarTramite/FormBuscarCodExp";
import FormBuscarCodTra from "../buscarTramite/FormBuscarCodTra";
import ResultadoBusqueda from "../buscarTramite/ResultadoBusqueda";
import ListarTramites from "../buscarTramite/ListarTramites";

const GestionarTramites = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="bg-white shadow-md rounded mx-10 mt-10 px-6 pt-3 pb-8 mb-8">
        <h1 className="font-light text-4xl text-left text-green-500 mb-6">
          Gestionar trámite por código
        </h1>
        <div className="grid grid-cols-3 gap-2">
          <FormBuscarCodTra />
          <FormBuscarCodExp />
          <ListarTramites />
          <ResultadoBusqueda />
          Se debe poder buscar tramites por cod o listado luego de ser
          seleccionado el tramite se debe poder actualizar(modificar ) o
          eliminar
        </div>
      </div>
    </Fragment>
  );
};

export default GestionarTramites;
