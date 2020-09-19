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
  const { listarUsuarios, cerrarSesion } = AuthContext;

  useEffect(() => {
    listarUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Onclick cerrar sesion
  const onClickCerrarSesion = () => {
    cerrarSesion();
  };

  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 mx-12 my-32">
        <Link
          to="/iniciar-tramite"
          className="bg-purple-100 hover:bg-gray-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={iniciarTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Iniciar Tramite</span>
        </Link>
        <Link
          to="/recibir-tramites"
          className="bg-purple-100 hover:bg-gray-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={recibirTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Recibir Tramite</span>
        </Link>
        <Link
          to="/"
          className="bg-purple-100 hover:bg-gray-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={gestiTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Gestionar Tramite</span>
        </Link>
        <Link
          to="/"
          className="bg-purple-100 hover:bg-gray-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={BuscarTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Buscar Tramite</span>
        </Link>
        <Link
          to="/"
          className="bg-purple-100 hover:bg-gray-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={iniciarTramite} width="23%" alt="" />
          <span className="font-hairline text-4xl">Administrar Usuarios</span>
        </Link>
        <Link
          to="/administrar-usuarios"
          className="bg-purple-100 hover:bg-gray-200 shadow-md text-gray-800  font-bold p-4 rounded inline-flex items-center"
        >
          <img className="mr-4" src={config} width="23%" alt="" />
          <span className="font-hairline text-4xl">Administrar usuarios</span>
        </Link>
      </div>
    </Fragment>
  );
};

export default Principal;
