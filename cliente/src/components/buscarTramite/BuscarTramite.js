import React, { Fragment, useContext } from "react";
import NavBar from "../layouts/Navbar";

import FormBuscarCodExp from "./FormBuscarCodExp";
import FormBuscarCodTra from "./FormBuscarCodTra";
import ResultadoBusqueda from "./ResultadoBusqueda";
import ListarTramites from "./ListarTramites";
import ResultadoListarTramites from "./ResultadoListarTramites";

import tramiteContext from "../../context/tramites/tramiteContext";
import { useEffect } from "react";

const BuscarTramite = () => {
  const TramiteContext = useContext(tramiteContext);
  const { listaTramites, tramite } = TramiteContext;

  var componente;
  useEffect(() => {
    componente = <ResultadoBusqueda />;
  }, [tramite]);

  useEffect(() => {
    componente = <ResultadoListarTramites />;
  }, [listaTramites]);

  return (
    <Fragment>
      <NavBar />

      <div className="bg-white shadow-md rounded mx-10 mt-10 px-6 pt-3 pb-8 mb-8">
        <h1 className="font-light text-4xl text-left text-green-500 mb-6">
          Buscar trámite por código
        </h1>
        <div className="grid grid-cols-3 gap-2">
          <FormBuscarCodTra />
          <FormBuscarCodExp />
          <ListarTramites />
          {tramite ? <ResultadoBusqueda /> : <ResultadoListarTramites />}
        </div>
      </div>
    </Fragment>
  );
};

export default BuscarTramite;
