import React, { Fragment } from "react";

import Navbar from "../layouts/Navbar";

const RecibirTramites = () => {
  return (
    <Fragment>
      <Navbar />
      <h1 className="font-light text-5xl text-left mb-4 text-green-500 ml-8">
        Recibir Trámites
      </h1>

      <div className="estilos-tabla">
        <table className="table-auto bg-white shadow mx-5 my-0 rounded ">
          <thead>
            <tr className="bg-gray-300">
              <th className="px-4 py-2">Cod. Trámite</th>
              <th className="px-4 py-2">Cod. Expediente</th>
              <th className="px-4 py-2">asunto</th>
              <th className="px-4 py-2">Area procedencia</th>
              <th className="px-4 py-2">Fecha llegada</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Elegir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">mdq20200926001</td>
              <td className="border px-4 py-2">Exp-2020_15-Res15</td>
              <td className="border px-4 py-2">
                Sol. Licencia de funcionamiento para local agricola en el
                distrito de Quilmana
              </td>
              <td className="border px-4 py-2">
                Gerencia de Administracion y finanzas
              </td>
              <td className="border px-4 py-2">15/07/2020</td>
              <td className="border px-4 py-2">Pendiente</td>
              <td className="border px-4 py-2 ">
                <input type="checkbox" className="ml-3" />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">mdq20200926001</td>
              <td className="border px-4 py-2">Exp-2020_15-Res15</td>
              <td className="border px-4 py-2">
                Sol. Licencia de funcionamiento para local agricola en el
                distrito de Quilmana
              </td>
              <td className="border px-4 py-2">
                Gerencia de Administracion y finanzas
              </td>
              <td className="border px-4 py-2">15/07/2020</td>
              <td className="border px-4 py-2">Pendiente</td>
              <td className="border px-4 py-2 ">
                <input type="checkbox" className="ml-3" />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">mdq20200926001</td>
              <td className="border px-4 py-2">Exp-2020_15-Res15</td>
              <td className="border px-4 py-2">
                Sol. Licencia de funcionamiento para local agricola en el
                distrito de Quilmana
              </td>
              <td className="border px-4 py-2">
                Gerencia de Administracion y finanzas
              </td>
              <td className="border px-4 py-2">15/07/2020</td>
              <td className="border px-4 py-2">Pendiente</td>
              <td className="border px-4 py-2 ">
                <input type="checkbox" className="ml-3" />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">mdq20200926001</td>
              <td className="border px-4 py-2">Exp-2020_15-Res15</td>
              <td className="border px-4 py-2">
                Sol. Licencia de funcionamiento para local agricola en el
                distrito de Quilmana
              </td>
              <td className="border px-4 py-2">
                Gerencia de Administracion y finanzas
              </td>
              <td className="border px-4 py-2">15/07/2020</td>
              <td className="border px-4 py-2">Pendiente</td>
              <td className="border px-4 py-2 ">
                <input type="checkbox" className="ml-3" />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">mdq20200926001</td>
              <td className="border px-4 py-2">Exp-2020_15-Res15</td>
              <td className="border px-4 py-2">
                Sol. Licencia de funcionamiento para local agricola en el
                distrito de Quilmana
              </td>
              <td className="border px-4 py-2">
                Gerencia de Administracion y finanzas
              </td>
              <td className="border px-4 py-2">15/07/2020</td>
              <td className="border px-4 py-2">Pendiente</td>
              <td className="border px-4 py-2 ">
                <input type="checkbox" className="ml-3" />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">mdq20200926001</td>
              <td className="border px-4 py-2">Exp-2020_15-Res15</td>
              <td className="border px-4 py-2">
                Sol. Licencia de funcionamiento para local agricola en el
                distrito de Quilmana
              </td>
              <td className="border px-4 py-2">
                Gerencia de Administracion y finanzas
              </td>
              <td className="border px-4 py-2">15/07/2020</td>
              <td className="border px-4 py-2">Pendiente</td>
              <td className="border px-4 py-2 ">
                <input type="checkbox" className="ml-3" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          className="mx-10 shadow-md h-12 w-1/3 bg-green-400 hover:bg-green-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
        >
          Aceptar trámites
        </button>
        <button
          className="mx-10 shadow-md h-12 w-1/3 bg-red-400 hover:bg-red-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
        >
          rechazar trámites
        </button>
      </div>
    </Fragment>
  );
};

export default RecibirTramites;
