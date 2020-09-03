import React, { Fragment } from "react";
import imgLogin from "../assets/img/imgLogin.svg";
import muniquilmanaescudo from "../assets/img/muniquilmanaescudo.png";

const Login = () => {
  return (
    <Fragment>
      <div className="w-full h-20 bg-purple-100">
        <div className="flex justify-between items-center mx-5">
          <img className="mt-2" src={muniquilmanaescudo} width="5%" alt="" />
          <h1 className="flex-1 text-center text-2xl">
            Municipalidad Dsitrital de Quilmaná - Sistema de Trámite
            Documentario
          </h1>
          <img className="mt-2" src={muniquilmanaescudo} width="5%" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 h-full">
        <div className="col-span-2">
          <form class="bg-white shadow-md rounded mx-12 mt-20 px-10 pt-6 pb-8 mb-4">
            <h1 className="font-semibold text-5xl text-center p-6 text-green-500">
              Iniciar Sesión
            </h1>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="usuario"
              >
                Usuario
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="usuario"
                type="text"
                placeholder="Usuario"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="contraseña"
              >
                Contraseña
              </label>
              <input
                class=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="shadow-md w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline -mb-16"
                type="button"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-3">
          <img className="mx-24 my-6" src={imgLogin} width="80%" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
