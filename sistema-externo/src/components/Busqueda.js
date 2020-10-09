import Axios from "axios";
import React from "react";
import { useState } from "react";
import buscar from "../assets/img/Buscar.svg";

const Busqueda = () => {
  const [codigo, setCodigo] = useState({ codigo: "" });
  const [error, setError] = useState(false);
  const [resExist, setResExist] = useState(false);
  const [resp, setResp] = useState({});

  const onchange = e => {
    setCodigo({
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const res = await Axios.post(
        "http://localhost:4000/api/tramite/obtenerTramiteSE",
        { codigo: codigo.codigo },
      );
      console.log(res.data);
      setResp(res.data);
      setResExist(true);
    } catch (error) {
      console.log(error.response.data.msg);
      setError(true);
    }

    setTimeout(() => {
      setError(false);
    }, 2500);
  };

  const onclickRecargar = () => {
    window.location.reload();
  };

  return (
    <div className="m-3">
      {resExist ? (
        <div className="bg-white rounded shadow  p-2">
          <h1 className="font-bold text-2xl text-gray-700 text-s mb-4">
            Resultado de la búsqueda:
          </h1>
          <h1 className="text-xl text-green-500">
            Tramite:
            <span className="mx-2 font-normal">{resp.tramite.codTramite}</span>
          </h1>
          <h1 className="text-xl text-green-500 mb-4">
            Expediente:
            <span className="mx-2 font-normal">
              {resp.tramite.codExpediente}
            </span>
          </h1>
          <h1 className="text-gray-900 font-semibold">
            Asunto:
            <span className="mx-2  text-gray-800 font-normal">
              {resp.tramite.asunto}
            </span>
          </h1>
          <h1 className="text-gray-900 font-semibold">
            Solicitante:
            <span className="mx-2  text-gray-800 font-normal">
              {resp.tramite.nombre} {resp.tramite.paterno}{" "}
              {resp.tramite.materno}
            </span>
          </h1>
          <h1 className="text-gray-900 font-semibold">
            Trámite iniciado:
            <span className="mx-2  text-gray-800 font-normal">
              {resp.tramite.fechaInicio.slice(0, 10)}
            </span>
          </h1>
          <h1 className="text-gray-900 font-semibold mb-2">
            Estado de trámite:
            <span className="mx-2  text-gray-800 font-normal">
              {resp.tramite.estado ? "Finalizado" : "En Proceso"}
            </span>
          </h1>

          <h1 className="text-green-700 text-xl">Historial de Derivaciones</h1>

          {resp.derivaciones.map(derivacion => (
            <div className="p-1 bg-gray-200 shadow rounded-md mb-2">
              <h1 className="text-gray-900 font-semibold mb-0">
                Area de Origen:
                <span className="mx-2  text-gray-800 font-light">
                  {derivacion.areaOrigen}
                </span>
              </h1>
              <h1 className="text-gray-900 font-semibold mb-0">
                Area de Destino:
                <span className="mx-2  text-gray-800 font-light">
                  {derivacion.areaDestino}
                </span>
              </h1>
              <h1 className="text-gray-900 font-semibold mb-0">
                Area de Destino:
                <span className="mx-2  text-gray-800 font-light">
                  {derivacion.descripcion
                    ? derivacion.descripcion
                    : "No hay descripción"}
                </span>
              </h1>
              <h1 className="text-gray-900 font-semibold mb-0">
                Fecha de Derivacion (desde area de origen):
                <span className="mx-2  text-gray-800 font-light">
                  {derivacion.fechaDerivacion.slice(0, 10)}
                </span>
              </h1>
              <h1 className="text-gray-900 font-semibold mb-0">
                Fecha de Aceptacion (en area de destino):
                <span className="mx-2  text-gray-800 font-light">
                  {derivacion.fechaAceptado
                    ? derivacion.fechaAceptado.slice(0, 10)
                    : "No Aceptado"}
                </span>
              </h1>
              <h1 className="text-gray-900 font-semibold mb-0">
                Fecha de Rechazo:
                <span className="mx-2  text-gray-800 font-light">
                  {derivacion.fechaRechazado
                    ? derivacion.fechaRechazado.slice(0, 10)
                    : "No Rechazado"}
                </span>
              </h1>
            </div>
          ))}
          <button
            onClick={onclickRecargar}
            className="rounded-full shadow-sm font-semibold center  hover:bg-yellow-600 bg-yellow-500 p-1 w-full h-10 mt-2"
          >
            Consultar otro trámite
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-green-600 text-2xl font-medium text-left font-centurygothic mb-4">
            Hacer seguimiento por codigo de trámite
          </h1>
          <img clasName="w-auto mt-6" src={buscar} alt="" />
          <form
            onSubmit={onSubmitForm}
            className="font-light  mt-6 text-black bg-gray-200 p-4 rounded shadow"
          >
            {error ? (
              <p className="font-bold text-center bg-red-400 shadow-sm  p-2 rounded-md text-gray-800 ">
                Error, Trámite no encontrado
              </p>
            ) : (
              <p className="font-base text-center  text-gray-800 ">
                Ingrese su código de tramite para realizar seguimiento de su
                tramite.
              </p>
            )}

            <div className="mt-4">
              <label htmlFor="codigo" className="text-left font-semibold">
                Ingrese código de trámite:
              </label>
              <input
                type="text"
                className="w-full mt-2  shadow-xs border-none p-1"
                onChange={onchange}
                name="codigo"
              />
            </div>
            <button
              type="onSubmit"
              className="rounded-full shadow-sm font-semibold center  hover:bg-yellow-600 bg-yellow-500 p-1 w-full h-10 mt-4"
            >
              Buscar trámite
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Busqueda;
