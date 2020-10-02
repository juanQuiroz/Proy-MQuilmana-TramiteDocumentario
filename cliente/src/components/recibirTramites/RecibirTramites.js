import React, { Fragment } from "react";

import Navbar from "../layouts/Navbar";

import tramiteContext from "../../context/tramites/tramiteContext";
import authContext from "../../context/autenticacion/authContext";

import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const RecibirTramites = () => {
  const TramiteContext = useContext(tramiteContext);
  const {
    listaTramitesUsuario,
    listartramitesUsuario,
    msgAceptarTramite,
    resAceptarTramites,
    aceptarTramites,
  } = TramiteContext;
  const AuthContext = useContext(authContext);
  const { usuario } = AuthContext;

  useEffect(() => {
    if (usuario) {
      const areaAtual = usuario.nombreArea;
      listartramitesUsuario({ areaAtual });
    }
  }, [usuario]);

  if (listaTramitesUsuario) {
    console.log(listaTramitesUsuario.derivaciones.length);
  }

  // State de las derivaciones
  const [derivacionesID, setDerivacionesID] = useState({
    ids: [],
  });

  // Destructuring
  const { ids } = derivacionesID;
  //Onclick aceptar
  const onclickButtonAceptar = e => {
    e.preventDefault();
    aceptarTramites({ ids });
    setDerivacionesID({
      ids: [],
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <Fragment>
      <Navbar />
      <h1 className="font-light text-5xl text-left mb-4 text-green-500 ml-8">
        Recibir Trámites
      </h1>

      <div className="estilos-tabla px-5">
        {msgAceptarTramite ? (
          <div className={`${resAceptarTramites.classname} mb-5`}>
            {resAceptarTramites.msg}
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
            {listaTramitesUsuario ? (
              listaTramitesUsuario.derivaciones.length ? (
                listaTramitesUsuario.derivaciones.map(derivacion => (
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
                      <input
                        type="checkbox"
                        className="ml-3"
                        value={derivacion._id}
                        name="idtramite"
                        onClick={e => {
                          setDerivacionesID({
                            ...derivacionesID,

                            ids: [...derivacionesID.ids, e.target.value],
                          });
                        }}
                      />
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
      <div className="flex items-center justify-center mt-5">
        <button
          className="mx-10 shadow-md h-12 w-1/3 bg-green-400 hover:bg-green-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onclickButtonAceptar}
        >
          Aceptar trámites
        </button>
        <button
          className="mx-10 shadow-md h-12 w-1/3 bg-red-400 hover:bg-red-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
        >
          rechazar trámites
        </button>
      </div>
    </Fragment>
  );
};

export default RecibirTramites;
