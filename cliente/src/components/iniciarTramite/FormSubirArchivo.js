import React from "react";

const FormSubirArchivo = () => {
  return (
    <form className="bg-white shadow-md rounded mx-10 mt-10 px-6 pt-3 pb-8 mb-8">
      <h1 className="font-light text-4xl text-left mb-4 text-green-500">
        Subir Archivo
      </h1>

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
            id="usuario"
            type="text"
            placeholder="Codigo"
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
                id=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="shadow-md h-12 w-1/2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
        >
          Subir Archivo
        </button>
      </div>
    </form>
  );
};

export default FormSubirArchivo;
