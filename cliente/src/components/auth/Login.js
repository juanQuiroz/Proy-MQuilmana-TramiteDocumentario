import React, { Fragment, useContext, useEffect, useState } from "react";
import imgLogin from "../../assets/img/imgLogin.svg";
import muniquilmanaescudo from "../../assets/img/muniquilmanaescudo.png";

import authContext from "../../context/autenticacion/authContext";

const Login = props => {
  const AuthContext = useContext(authContext);
  const { mensaje, autenticado, iniciarSesion } = AuthContext;

  // En caso de que el usuario se haya autenticado, registrado o que sea un registro duplicado
  useEffect(() => {
    if (autenticado) {
      props.history.push("/principal");
    }
  }, [autenticado, props.history]);

  // State para iniciar Sesion
  const [usuario, guardarUsuario] = useState({
    nombreUsuario: "",
    contraseña: "",
  });

  // State de error (formulario inccmpleto)
  const [error, setError] = useState(false);

  // Extraer de usuario
  const { nombreUsuario, contraseña } = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    // Validar que no hayan campos vacios
    if (nombreUsuario.trim() === "" || contraseña.trim() === "") {
      // Validar Error de formulario vacio
      setError(true);
      // Quitar mensaje de error
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    // Pasarlo al Action
    iniciarSesion({ nombreUsuario, contraseña });
  };

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
          <form
            onSubmit={onSubmit}
            className="bg-white shadow-md rounded mx-12 mt-20 px-10 pt-6 pb-8 mb-4"
          >
            {error ? (
              <div className="bg-red-400 p-4 rounded font-bold shadow-md text-center">
                Todos los campos son obligatorios
              </div>
            ) : null}
            <h1 className="font-semibold text-5xl text-center p-6 text-green-500">
              Iniciar Sesión
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="usuario"
              >
                Usuario
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="usuario"
                type="text"
                placeholder="Usuario"
                name="nombreUsuario"
                onChange={onChange}
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
                onChange={onChange}
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
          <img className="mx-24 my-6" src={imgLogin} width="80%" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
