import React from "react";
import { useContext } from "react";
import { useState } from "react";

import authContext from "../../context/autenticacion/authContext";

const FormCrearUsuario = () => {
  // Context de autenticacion
  const AuthContext = useContext(authContext);
  const { msgNuevoUsuario, mensaje, registrarUsuario } = AuthContext;

  // State de los usuarios
  const [usuario, setUsuario] = useState({
    nombreUsuario: "",
    nombreArea: "",
    contraseña: "",
  });

  // State de validar formulario
  const [error, setError] = useState(false);

  const onChangeInput = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitButton = async e => {
    e.preventDefault();

    // Validar campos
    if (
      usuario.nombreUsuario.trim() === "" ||
      usuario.nombreArea.trim() === "" ||
      usuario.contraseña.trim() === ""
    ) {
      setError(true);
      // Quitar mensaje de error
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    const { nombreUsuario, nombreArea, contraseña } = usuario;
    // Pasar al action de registrarUsuario
    registrarUsuario({
      nombreUsuario,
      nombreArea,
      contraseña,
    });
  };

  return (
    <form
      onSubmit={onSubmitButton}
      className="bg-white shadow-md rounded mx-10 mt-10 px-6 pt-3 pb-8 mb-8"
    >
      {error ? (
        <div className="bg-red-400 p-4 rounded font-bold shadow-md text-center">
          Todos los campos son obligatorios
        </div>
      ) : null}
      {msgNuevoUsuario ? (
        <div className={`${mensaje.classname}`}>{mensaje.msg}</div>
      ) : null}
      <h1 className="font-light text-4xl text-left mb-4 text-green-500">
        Crear Usuario / Area
      </h1>

      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="usuario"
        >
          Nombre de usuario:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="usuario"
          type="text"
          placeholder="Nombre de usuario"
          name="nombreUsuario"
          onChange={onChangeInput}
        />
      </div>

      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="usuario"
        >
          Nombre del Area / Gerencia / Subgerencia:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="usuario"
          type="text"
          placeholder="Nombre del Area / Gerencia / Subgerencia"
          name="nombreArea"
          onChange={onChangeInput}
        />
      </div>

      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="usuario"
        >
          Contraseña:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="usuario"
          type="text"
          placeholder="Contraseña"
          name="contraseña"
          onChange={onChangeInput}
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          className="shadow-md h-12 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Crear Usuario
        </button>
      </div>
    </form>
  );
};

export default FormCrearUsuario;
