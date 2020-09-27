import React from "react";
import { useState } from "react";
import { useContext } from "react";
import lupa from "../../assets/img/lupa.svg";

import tramiteContext from "../../context/tramites/tramiteContext";

const FormBuscarCodExp = () => {
  const TramiteContext = useContext(tramiteContext);
  const { BuscarTramite } = TramiteContext;

  const [codigo, setCodigo] = useState({
    codExpediente: "",
  });

  const onChangeInput = e => {
    setCodigo({
      ...codigo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (codigo.codExpediente.trim() === "") {
      // Mensaje de Error
    }

    // Consultar Datos
    BuscarTramite(codigo);

    // Reiniciar formulario
    setCodigo({ codExpediente: "" });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="usuario"
        >
          Por Código de expediente:
        </label>
        <div className="flex items-center justify-center">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Código de expediente"
            name="codExpediente"
            onChange={onChangeInput}
            value={codigo.codExpediente}
          />
          <button
            type="submit"
            className="shadow mx-2 w-20 h-10 bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center focus:shadow-outline"
          >
            <img src={lupa} width="80%" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormBuscarCodExp;
