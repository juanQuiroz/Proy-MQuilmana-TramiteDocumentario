import React from "react";

import { Link } from "react-router-dom";

import navUser from "../../assets/img/navUser.svg";
import navHome from "../../assets/img/navHome.svg";
import navOut from "../../assets/img/navOut.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap fondo-gris p-6 h-20">
      <div className="flex items-center flex-shrink-0 text-black mr-6 -mt-3">
        <img className="mr-2" src={navUser} alt="" width="16%" />
        <div className="flex flex-col">
          <span className="font-semibold text-xl tracking-tight">
            Nombre de gerencia
          </span>
          <span className="font-light text-l tracking-tight">
            Municipalidad Distrital de Quilmana
          </span>
        </div>
      </div>
      <div className="flex">
        <Link
          to="/principal"
          className="hover:bg-purple-100 text-gray-800 -mt-2 font-bold py-2 pl-4 rounded inline-flex items-center"
        >
          <img className="mr-1" src={navHome} width="25%" alt="" />
          <span className="font-hairline text-xl">Menú</span>
        </Link>
        <Link
          to="/"
          className="hover:bg-purple-100 text-gray-800 -mt-2 font-bold ml-4 py-2 pl-4 rounded inline-flex items-center"
        >
          <img className="mr-1" src={navOut} width="25%" alt="" />
          <span className="font-hairline text-xl">Salir</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
