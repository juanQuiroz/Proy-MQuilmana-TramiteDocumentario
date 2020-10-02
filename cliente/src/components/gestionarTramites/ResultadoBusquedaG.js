import React, { useContext, useState } from "react";

import tramiteContext from "../../context/tramites/tramiteContext";

const ResultadoBusquedaG = () => {
  const TramiteContext = useContext(tramiteContext);
  const {
    mensaje,
    tramite,
    msgEliminarTramite,
    msgBuscarTramite,
    resEliminarTramite,
    eliminarTramite,
  } = TramiteContext;

  const [tramiteSeleccionado, setTramiteSeleccionado] = useState(false);

  const onClickEliminarTramite = () => {
    if (tramite) {
      const id = tramite.tramite._id;
      console.log(id);
      eliminarTramite({ id });
    }
    setTramiteSeleccionado(false);
  };

  return (
    <div className="col-span-3 bg-gray-100 shadow w-full p-6">
      {msgEliminarTramite ? (
        <div className={`w-full ${resEliminarTramite.classname} mb-3`}>
          {resEliminarTramite.msg}
        </div>
      ) : null}
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
          {tramiteSeleccionado ? (
            <div>
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                  &#8203;
                  <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-red-600"
                            id="modal-headline"
                          >
                            ¿Desea Eliminar Tramite ... ?
                          </h3>
                          <div className="mt-2 text-sm leading-5 text-gray-600">
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
                                {tramite.tramite.estado
                                  ? "Finalizado"
                                  : "En Proceso"}
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
                                {tramite.tramite.nombre}{" "}
                                {tramite.tramite.paterno}{" "}
                                {tramite.tramite.materno}
                              </span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button
                          type="button"
                          className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          onClick={onClickEliminarTramite}
                        >
                          Eliminar tramite
                        </button>
                      </span>
                      <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                        <button
                          type="button"
                          className="inline-flex justify-center w-full rounded-md border border-red-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          onClick={e => {
                            setTramiteSeleccionado(false);
                          }}
                        >
                          Cancelar
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="m-4">
        <div className="flex items-center justify-center">
          {tramite ? (
            <button
              onClick={e => {
                setTramiteSeleccionado(true);
              }}
              className="text-center  shadow-md h-10 w-1/3 bg-red-400 hover:bg-red-500 text-gray-900 font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
            >
              Eliminar Tramite
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ResultadoBusquedaG;
