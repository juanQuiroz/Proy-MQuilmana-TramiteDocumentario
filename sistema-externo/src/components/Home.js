import React from "react";
import home from "../assets/img/home.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-6">
      <h1 className="text-green-600 text-2xl font-medium text-left font-centurygothic mb-2">
        Sistema de Seguimiento de Trámite Documentario
      </h1>
      <img clasName="w-auto" src={home} alt="" />
      <p className="font-light text-justify mt-8 text-black">
        El sistema de seguimiento de tramite online de la Municipalidad
        Distrital de Quilmaná permite a sus usuarios tener conocimiento del
        estado de sus tramites realizados en la institución.
      </p>
      <Link to="/busqueda">
        <button className="rounded-full shadow-sm font-semibold center  hover:bg-yellow-600 bg-yellow-500 p-1 w-full h-10 mt-8">
          Hacer seguimiento
        </button>
      </Link>
    </div>
  );
};

export default Home;
