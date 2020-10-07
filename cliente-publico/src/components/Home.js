import React, { Fragment } from "react";
import home from "../assets/img/home.svg";
import muniquilmanaescudo from "../assets/img/muniquilmanaescudo.png";

const Home = () => {
  return (
    <Fragment>
      <div className="sm:w-full bg-gris-100">
        <div className="sm:w-full w-full flex justify-between items-center md:mx-5">
          <img
            className="sm:mx-2 sm:w-8 sm:my-2 md:mt-2"
            src={muniquilmanaescudo}
            width="8%"
            alt=""
          />
          <h1 className=" flex-1 text-center md:text-2xl sm:text-base md:w-auto sm:bg-red-200 md:bg-blue-200">
            Municipalidad Distrital de Quilmaná - Sistema de seguimiento de
            Trámite
          </h1>
          <img
            className="sm:mx-2 sm:w-8 sm:my-2 md:mt-2"
            src={muniquilmanaescudo}
            width="8%"
            alt=""
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-2 h-full">
        <div className="col-span-2">
          <form className="bg-white shadow-md rounded mx-12 mt-20 px-10 pt-6 pb-8 mb-4">
            <h1 className="font-semibold text-5xl text-center p-6 text-green-500">
              Iniciar Sesión
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="usuario"
              >
                Usuarios
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="usuario"
                type="text"
                placeholder="Usuario"
                name="nombreUsuario"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contraseña"
              >
                Contraseña
              </label>
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                name="contraseña"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="shadow-md w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline -mb-16"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-3">
          <img className="mx-24 my-6" src={home} width="80%" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
