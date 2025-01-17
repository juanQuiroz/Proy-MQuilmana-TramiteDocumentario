import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "./layouts/Navbar";

import iniciarTramite from "../assets/img/iniciarTramite.svg";
import BuscarTramite from "../assets/img/BuscarTramite.svg";
import config from "../assets/img/config.svg";
import gestiTramite from "../assets/img/gestiTramite.svg";
import recibirTramite from "../assets/img/recibirTramite.svg";

import authContext from "../context/autenticacion/authContext";

const Principal = () => {
  // Context de autenticacion
  const AuthContext = useContext(authContext);
  const { listarUsuarios, ususarioAutenticado, usuario } = AuthContext;

  useEffect(() => {
    listarUsuarios();
    ususarioAutenticado();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (usuario) {
    console.log(usuario.adminRol);
  }

  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 mx-12 my-32">
        <Link
          to="/iniciar-tramite"
          className="bg-green-300 hover:bg-green-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={iniciarTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Iniciar Trámite</span>
        </Link>
        <Link
          to="/recibir-tramites"
          className="bg-green-300 hover:bg-green-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={recibirTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Recibir Trámite</span>
        </Link>
        <Link
          to="/derivar-tramites"
          className="bg-green-300 hover:bg-green-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={iniciarTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Derivar Trámites</span>
        </Link>
        <Link
          to="/Buscar-tramite"
          className="bg-green-300 hover:bg-green-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={BuscarTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Buscar Trámite</span>
        </Link>

        {usuario ? (
          usuario.adminRol ? (
            <Link
              to="/gestionarTramites"
              className="bg-teal-200 hover:bg-teal-300 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
            >
              <img className="mr-4" src={gestiTramite} width="23%" alt="" />
              <span className="font-hairline text-4xl">Eliminar Trámites</span>
            </Link>
          ) : (
            <Link
              to="/principal"
              className="opacity-50 bg-teal-200 hover:bg-teal-300 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
            >
              <img className="mr-4" src={gestiTramite} width="23%" alt="" />
              <span className="font-hairline text-4xl">Eliminar Trámites</span>
            </Link>
          )
        ) : null}
        {usuario ? (
          usuario.adminRol ? (
            <Link
              to="/administrar-usuarios"
              className=" bg-teal-200 hover:bg-teal-300 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
            >
              <img className="mr-4" src={config} width="23%" alt="" />
              <span className="font-hairline text-4xl">
                Administrar usuarios
              </span>
            </Link>
          ) : (
            <Link
              to="/principal"
              className=" opacity-50 bg-teal-200 hover:bg-teal-300 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
            >
              <img className="mr-4" src={config} width="23%" alt="" />
              <span className="font-hairline text-4xl ">
                Administrar usuarios
              </span>
            </Link>
          )
        ) : null}
      </div>
    </Fragment>
  );
};

export default Principal;
