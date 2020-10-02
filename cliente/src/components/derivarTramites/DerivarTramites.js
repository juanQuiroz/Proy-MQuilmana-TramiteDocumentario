import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";

import tramiteContext from "../../context/tramites/tramiteContext";
import authContext from "../../context/autenticacion/authContext";

import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const DerivarTramites = () => {
  const TramiteContext = useContext(tramiteContext);
  const {
    listaTramitesAceptados,
    listartramitesAceptados,
    msgDervarTramite,
    resDerivarTramites,
    derivarTramites,
  } = TramiteContext;
  const AuthContext = useContext(authContext);
  const { usuario, listarUsuarios, listaUsuarios } = AuthContext;

  useEffect(() => {
    listarUsuarios();
    if (usuario) {
      const areaAtual = usuario.nombreArea;
      listartramitesAceptados({ areaAtual });
      setDerivacionesID({ ...derivacionesID, areaOrigen: usuario.nombreArea });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuario]);

  // State de las derivaciones
  const [derivacionesID, setDerivacionesID] = useState({
    tramiteId: "",
    derivacionId: "",
    areaDestino: "",
    descripcion: "",
    areaOrigen: "",
    codTramite: "",
    codExpediente: "",
    asunto: "",
  });

  const [tramiteSeleccionado, setTramiteSeleccionado] = useState(false);

  const onChangeInput = e => {
    setDerivacionesID({
      ...derivacionesID,
      [e.target.name]: e.target.value,
    });
  };

  const onClickDerivar = () => {
    setTramiteSeleccionado(false);
    derivarTramites(derivacionesID);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <Fragment>
      <Navbar />
      <h1 className="font-light text-5xl text-left mb-4 text-green-500 ml-8">
        Derivar Trámites
      </h1>

      <div className="estilos-tabla px-5">
        {msgDervarTramite ? (
          <div className={`${resDerivarTramites.classname} mb-5`}>
            {resDerivarTramites.msg}
          </div>
        ) : null}
        <table className="table-auto bg-white shadow  my-0 rounded w-full">
          <thead>
            <tr className="bg-gray-300">
              <th className="px-4 py-2">Cod. Trámite</th>
              <th className="px-4 py-2">Cod. Expediente</th>
              <th className="px-4 py-2">asunto</th>
              <th className="px-4 py-2">Descripcion</th>
              <th className="px-4 py-2">Area procedencia</th>
              <th className="px-4 py-2">Fecha llegada</th>
              <th className="px-4 py-2">Elegir</th>
            </tr>
          </thead>
          <tbody>
            {listaTramitesAceptados ? (
              listaTramitesAceptados.derivaciones.length ? (
                listaTramitesAceptados.derivaciones.map(derivacion => (
                  <tr key={derivacion._id}>
                    <td className="border px-4 py-2">
                      {derivacion.codTramite}
                    </td>
                    <td className="border px-4 py-2">
                      {derivacion.codExpediente}
                    </td>
                    <td className="border px-4 py-2">{derivacion.asunto}</td>
                    <td className="border px-4 py-2">
                      {derivacion.descripcion}
                    </td>
                    <td className="border px-4 py-2">
                      {derivacion.areaOrigen}
                    </td>
                    <td className="border px-4 py-2">
                      {derivacion.fechaDerivacion.slice(0, 10)}
                    </td>
                    <td className="border px-4 py-2 ">
                      <button
                        type="button"
                        className="ml-3 bg-yellow-500 p-1 shadow-xs rounded"
                        value={derivacion.tramite}
                        name="idtramite"
                        onClick={e => {
                          setDerivacionesID({
                            ...derivacionesID,
                            tramiteId: e.target.value,
                            derivacionId: derivacion._id,
                            codTramite: derivacion.codTramite,
                            codExpediente: derivacion.codExpediente,
                            asunto: derivacion.asunto,
                          });
                          setTramiteSeleccionado(true);
                        }}
                      >
                        Derivar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h1 className=" mx-20 my-12 p-5 bg-green-400 shadow rounded absolute w-4/5 text-3xl text-center font-light text-gray-800">
                  No Hay tramites por aceptar o rechazar
                </h1>
              )
            ) : null}
          </tbody>
        </table>
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
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Derivar Tramite
                      </h3>
                      <div className="mt-2 text-sm leading-5 text-gray-600">
                        <h2>
                          {derivacionesID.codTramite}
                          {" / "}
                          {derivacionesID.codExpediente}
                        </h2>

                        <h2>{derivacionesID.asunto}</h2>
                        <h2>{derivacionesID.areaOrigen}</h2>
                        <h2>{derivacionesID.fechaDerivacion}</h2>
                      </div>
                    </div>
                  </div>

                  <form className="px-3 my-2">
                    <div className="mb-2 inline-block relative w-full">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="usuario"
                      >
                        Derivar hacia:
                      </label>
                      <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        name="areaDestino"
                        onClick={onChangeInput}
                      >
                        <option selected disabled>
                          -- Seleccione el area --
                        </option>

                        {listaUsuarios
                          ? listaUsuarios.usuarios.map(usuario => (
                              <option
                                value={usuario.nombreArea}
                                key={usuario._id}
                              >
                                {usuario.nombreArea}
                              </option>
                            ))
                          : null}
                      </select>
                      <div className="pointer-events-none absolute -mt-6 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="usuario"
                      >
                        Descripcion:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="usuario"
                        type="text"
                        placeholder="Ej. para su atencion ..."
                        name="descripcion"
                        onChange={onChangeInput}
                        value={usuario.contraseña}
                      />
                    </div>
                  </form>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      onClick={onClickDerivar}
                    >
                      Realizar Derivacion
                    </button>
                  </span>
                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      type="submit"
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
    </Fragment>
  );
};

export default DerivarTramites;
