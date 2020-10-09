import React from "react";
import logomuni from "../assets/img/muniquilmanaescudo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <div className="flex bg-gray-300 shadow-sm rounded-md m-1 h-12 md:h-20">
        <img className="h-8 my-2 mx-2 md:h-16 md:mx-4" src={logomuni} alt="" />
        <div className="my-1 md:my-3">
          <h1 className="text-sm font-normal md:text-lg">
            Municipalidad Distrital de Quilmaná
          </h1>
          <h1 className="text-sm font-light md:text-base">
            Trámite Documentario
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default NavBar;
