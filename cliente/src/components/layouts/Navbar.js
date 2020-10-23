import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import navUser from "../../assets/img/navUser.svg";
import navHome from "../../assets/img/navHome.svg";
import navOut from "../../assets/img/navOut.svg";

import authContext from "../../context/autenticacion/authContext";

const Navbar = () => {
  // Context de autenticacion
  const AuthContext = useContext(authContext);
  const { usuario, ususarioAutenticado, cerrarSesion } = AuthContext;

  // Onclick cerrar sesion
  const onClickCerrarSesion = () => {
    cerrarSesion();
  };
  useEffect(() => {
    ususarioAutenticado();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap shadow fondo-nav p-6 h-20 border-b-2 border-green-500">
      <div className="flex items-center flex-shrink-0 text-black mr-6 -mt-3">
        <img className="mr-2" src={navUser} alt="" width="12%" />
        <div className="ml-2 flex flex-col">
          {usuario ? (
            <span className="font-semibold text-base tracking-tight text-green-700">
              {usuario.nombreArea}
            </span>
          ) : null}

          <span className="font-light text-sm tracking-tight">
            Municipalidad Distrital de Quilmana
          </span>
        </div>
      </div>
      <div className="flex">
        <Link
          to="/principal"
          className="hover:bg-purple-100 hover:shadow-md text-gray-800 -mt-2 font-bold py-2 pl-4 rounded inline-flex items-center"
        >
          <img className="mr-1" src={navHome} width="25%" alt="" />
          <span className="font-hairline text-xl">Menú</span>
        </Link>
        <Link
          type="button"
          onClick={onClickCerrarSesion}
          to="/"
          className="hover:bg-purple-100 hover:shadow-md text-gray-800 -mt-2 font-bold ml-2 py-2 pl-4 mr-0 rounded inline-flex items-center"
        >
          <img className="mr-2" src={navOut} width="15%" alt="" />
          <button className="font-hairline text-xl ">Salir</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
