import React, { useContext } from "react";

import tramiteContext from "../../context/tramites/tramiteContext";

const ResultadoListarTramites = () => {
  const TramiteContext = useContext(tramiteContext);
  const { msgListarTramites, mensaje, listaTramites } = TramiteContext;

  return (
    <div className="col-span-3 bg-gray-100 shadow w-full p-6">
      {msgListarTramites ? (
        <div className={`w-full ${mensaje.classname}`}>{mensaje.msg}</div>
      ) : null}

      {listaTramites ? (
        <div>
          {listaTramites.tramites.map(tramite => (
            <div
              key={tramite._id}
              className="grid grid-cols-2 gap-2 border-gray-200 border-2 bg-white rounded my-2 p-2"
            >
              <h1 className="text-base  font-bold text-gray-700">
                Expediente:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.codExpediente}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Codigo de trámite:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.codTramite}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Fecha de Inicio:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.fechaInicio.slice(0, 10)}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Estado:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.estado ? "Finalizado" : "En Proceso"}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Asunto:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.asunto}
                </span>
              </h1>

              <h1 className="text-base font-bold text-gray-700">
                Trámite iniciado por:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.areaInicio}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Solicitante:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.nombre} {tramite.paterno} {tramite.materno}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Telefono:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.telefono}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Correo:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.correo}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Domicilio:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.domicilio}
                </span>
              </h1>
              <h1 className="text-base font-bold text-gray-700">
                Fundamento de solicitud:
                <span className="ml-2 text-sm font-normal text-gray-800">
                  {tramite.fundamentoSol}
                </span>
              </h1>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ResultadoListarTramites;
