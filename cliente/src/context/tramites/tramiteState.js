import React, { useReducer } from "react";
import tramiteContext from "./tramiteContext";
import tramiteReducer from "./tramiteReducer";

import clienteAxios from "../../config/axios";

import {
  EXITO_REGISTARTRAMITE,
  ERROR_REGISTARTRAMITE,
  OCULTAR_MENSAJE,
  OCULTAR_MENSAJE_COD,
  EXITO_BUSCARPORCOD,
  ERROR_BUSCARPORCOD,
} from "../../types";

const TramiteState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    mensaje: {},
    msgRegistrarTramite: null,
    msgSubirArchivo: null,
    msgBuscarTramite: null,
    msgCodTramite: null,
    tramite: null,
  };

  // REDUCER
  const [state, dispatch] = useReducer(tramiteReducer, initialState);

  // ------------------- FUNCIONES -------------------
  // Registrar tramite
  const registrarTramite = async datos => {
    try {
      const res = await clienteAxios.post("/api/tramite", datos);

      const alerta = {
        res,
        msg: "Tramite creado correctamente",
        classname: "bg-green-400 p-4 rounded font-bold shadow-md text-center",
      };
      dispatch({
        type: EXITO_REGISTARTRAMITE,
        payload: alerta,
      });
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE_COD,
        });
      }, 20000);
    } catch (error) {
      console.log(error.response);
      const alerta = {
        msg: error.response.data,
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_REGISTARTRAMITE,
        payload: alerta,
      });
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
    }
  };

  // Busca un tramite por codigo de tramite o expediente
  const BuscarTramite = async datos => {
    try {
      const res = await clienteAxios.post("/api/tramite/buscar", datos);
      console.log("try-buscartramite:", res);
      const alerta = {
        msg: "Tramite creado correctamente",
        classname: "bg-green-400 p-4 rounded font-bold shadow-md text-center",
      };
      dispatch({
        type: EXITO_BUSCARPORCOD,
        payload: res.data,
      });
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
    } catch (error) {
      console.log("catch-buscartramite:", error.response);
      const alerta = {
        msg: error.response.data.msg,
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_BUSCARPORCOD,
        payload: alerta,
      });
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
    }
  };

  return (
    <tramiteContext.Provider
      value={{
        token: state.token,
        mensaje: state.mensaje,
        msgRegistrarTramite: state.msgRegistrarTramite,
        msgSubirArchivo: state.msgSubirArchivo,
        msgBuscarTramite: state.msgBuscarTramite,
        msgCodTramite: state.msgCodTramite,
        tramite: state.tramite,
        registrarTramite,
        BuscarTramite,
      }}
    >
      {props.children}
    </tramiteContext.Provider>
  );
};
export default TramiteState;
