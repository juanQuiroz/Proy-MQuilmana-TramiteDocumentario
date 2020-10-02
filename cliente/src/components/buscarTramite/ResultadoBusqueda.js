import React, { useContext } from "react";

import tramiteContext from "../../context/tramites/tramiteContext";

const ResultadoBusqueda = () => {
  const TramiteContext = useContext(tramiteContext);
  const { msgBuscarTramite, mensaje, tramite } = TramiteContext;

  return (
    <div className="col-span-3 bg-gray-100 shadow w-full p-6">
      {msgBuscarTramite ? (
        <div className={`w-full ${mensaje.classname}`}>{mensaje.msg}</div>
      ) : null}
      {tramite ? (
        <div>
          <div className="grid grid-cols-2 gap-2">
            <h1 className="text-base  font-bold text-gray-700">
              Expediente:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.codExpediente}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Codigo de trámite:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.codTramite}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Fecha de Inicio:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.fechaInicio.slice(0, 10)}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Estado:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.estado ? "Finalizado" : "En Proceso"}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Asunto:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.asunto}
              </span>
            </h1>

            <h1 className="text-base font-bold text-gray-700">
              Trámite iniciado por:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.areaInicio}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Solicitante:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.nombre} {tramite.tramite.paterno}{" "}
                {tramite.tramite.materno}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Telefono:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.telefono}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Correo:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.correo}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Domicilio:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.domicilio}
              </span>
            </h1>
            <h1 className="text-base font-bold text-gray-700">
              Fundamento de solicitud:
              <span className="ml-2 text-sm font-normal text-gray-800">
                {tramite.tramite.fundamentoSol}
              </span>
            </h1>
          </div>
          <h1 className="text-xl  font-bold text-green-400 mt-6">
            Historial de Derivaciones
          </h1>
          <table className="shadow text-sm table-auto bg-white rounded-md mt-2">
            <thead>
              <tr className="bg-green-400 rounded-md">
                <th className="px-4 py-2">Area de Origen</th>
                <th className="px-4 py-2">Area de Destino</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Fecha de Derivación</th>
                <th className="px-4 py-2">Fecha de Aceptación</th>
                <th className="px-4 py-2">Fecha de Rechazo</th>
              </tr>
            </thead>
            <tbody>
              {tramite.derivaciones.map(derivacion => (
                <tr key={derivacion._id}>
                  <td className="border px-4 py-2">{derivacion.areaOrigen}</td>
                  <td className="border px-4 py-2">{derivacion.areaDestino}</td>
                  <td className="border px-4 py-2">
                    {derivacion.descripcion
                      ? derivacion.descripcion
                      : "Noy hay descripción"}
                  </td>
                  <td className="border px-4 py-2">
                    {derivacion.fechaDerivacion.slice(0, 10)}
                  </td>
                  <td className="border px-4 py-2">
                    {derivacion.fechaAceptado
                      ? derivacion.fechaAceptado.slice(0, 10)
                      : "No Aceptado"}
                  </td>
                  <td className="border px-4 py-2">
                    {derivacion.fechaRechazado
                      ? derivacion.fechaRechazado.slice(0, 10)
                      : "No Rechazado"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      <div className="m-4">
        <div className="flex items-center justify-center">
          {tramite ? (
            <a
              className="text-center  shadow-md h-10 w-1/3 bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
              href={`https://www.backendquilmana.cyou/api/subir/${tramite.tramite.codTramite}`}
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              Obtener Archivo PDF
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ResultadoBusqueda;
