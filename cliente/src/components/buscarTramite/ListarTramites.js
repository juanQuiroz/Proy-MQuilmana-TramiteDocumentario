import React from "react";

const ListarTramites = () => {
  return (
    <form>
      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="usuario"
        >
          Listar todos los tramites:
        </label>
        <div className="flex items-center justify-center">
          <button
            className="shadow-md h-10 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Listar Tramites
          </button>
        </div>
      </div>
    </form>
  );
};

export default ListarTramites;
