import React, { useState } from "react";
import axios from "axios";

const FormSubirArchivo = () => {
  // State de los datos del formulario
  const [datos, guardarDatos] = useState({
    codtramite: "",
  });
  const [imgState, guardarImgState] = useState({
    archivo: "",
  });

  const [error, setError] = useState(false);
  const [resServer, setResSever] = useState(false);

  const agregarAlState = e => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const agregarArchivo = e => {
    guardarImgState({ archivo: e.target.files[0] });
  };

  // On submit
  const onSubmit = async e => {
    e.preventDefault();

    if (datos.codtramite.trim() === "") {
      setError(true);
    }

    try {
      const { archivo } = imgState;
      const formData = new FormData();
      formData.append("codtramite", datos.codtramite);
      formData.append("archivo", archivo);

      const res = await axios.post(
        "https://www.backendquilmana.cyou/api/subir",

        formData,
      );

      //console.log(res);
      if (res.data.estado === true) {
        setResSever(true);
      }
    } catch (e) {
      console.log(e);
    }

    setTimeout(() => {
      setError(false);
      setResSever(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={onSubmit}
      encType="multipart/form-data"
      className="bg-white shadow-md rounded mx-10 mt-10 px-6 pt-3 pb-8 mb-8"
    >
      <h1 className="font-light text-4xl text-left mb-4 text-green-500">
        Subir Archivo
      </h1>

      {error ? (
        <div className="bg-red-400 p-4 rounded font-bold shadow-md text-center">
          ¡ Es Necesario escribir el codigo de tramite !
        </div>
      ) : null}
      {resServer ? (
        <div className="bg-green-400 p-4 rounded font-bold shadow-md text-center">
          Archivo Subido Exitosamente
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-3">
        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Codigo de tramite
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="codtramite"
            name="codtramite"
            onChange={agregarAlState}
          />
        </div>
        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Codigo de tramite
          </label>
          <div className="mt-2">
            <div>
              <input
                className="px-4 py-1 rounded w-full bg-green-200 shadow"
                type="file"
                name="archivo"
                onChange={agregarArchivo}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="shadow-md h-12 w-1/2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Subir Archivo
        </button>
      </div>
    </form>
  );
};

export default FormSubirArchivo;
