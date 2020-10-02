import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

import authContext from "../../context/autenticacion/authContext";

const FormCambiarContraseña = () => {
  // Context de autenticacion
  const AuthContext = useContext(authContext);
  const {
    autenticado,
    msgCambiarContra,
    mensaje,
    cargando,
    listarUsuarios,
    listaUsuarios,
    actualizarContraseña,
  } = AuthContext;

  useEffect(() => {
    listarUsuarios();
    console.log(autenticado);
  }, []);

  console.log(autenticado);

  // State de los usuarios
  const [usuario, setUsuario] = useState({
    _id: "",
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
    if (usuario._id.trim() === "" || usuario.contraseña.trim() === "") {
      setError(true);
      // Quitar mensaje de error
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    const { _id, contraseña } = usuario;

    // Pasar al action de registrarUsuario
    actualizarContraseña({
      _id,
      contraseña,
    });

    // Reiniciar State
    setUsuario({
      _id: "",
      contraseña: "",
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
      {msgCambiarContra ? (
        <div className={`${mensaje.classname}`}>{mensaje.msg}</div>
      ) : null}

      <h1 className="font-light text-4xl text-left text-green-500 mb-12">
        Cambiar Contraseña
      </h1>

      <div class="mb-2 inline-block relative w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="usuario"
        >
          Area / Gerencia / SubGerencia
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          name="_id"
          onClick={onChangeInput}
        >
          <option selected disabled>
            -- Seleccione el area --
          </option>

          {listaUsuarios
            ? listaUsuarios.usuarios.map(usuario => (
                <option value={usuario._id} key={usuario._id}>
                  {usuario.nombreArea}
                </option>
              ))
            : null}
        </select>
        <div className="pointer-events-none absolute -mt-6 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="usuario"
        >
          Nueva contraseña:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="usuario"
          type="text"
          placeholder="Contraseña"
          name="contraseña"
          onChange={onChangeInput}
          value={usuario.contraseña}
        />
      </div>

      <div className="flex items-center justify-center mt-12">
        <button
          className="shadow-md h-12 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Cambiar contraseña
        </button>
      </div>
    </form>
  );
};

export default FormCambiarContraseña;
