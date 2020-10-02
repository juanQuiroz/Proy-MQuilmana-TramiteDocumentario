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
  EXITO_LISTARTRAMITES,
  ERROR_LISTARTRAMITES,
  EXITO_LISTARTRAMITEUSUARIO,
  ERROR_LISTARTRAMITEUSUARIO,
  EXITO_ACEPTARTRAMITES,
  ERROR_ACEPTARTRAMITES,
  EXITO_LISTARTRAMITEACEPTADO,
  ERROR_LISTARTRAMITEACEPTADO,
  EXITO_DERIVARTRAMITES,
  ERROR_DERIVARTRAMITES,
  EXITO_ELIMINAR,
  ERROR_ELIMINAR,
} from "../../types";

const TramiteState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    mensaje: {},
    msgRegistrarTramite: null,
    msgSubirArchivo: null,
    msgBuscarTramite: null,
    msgCodTramite: null,
    msgListarTramites: null,
    msgListarTramitesUsuario: null,
    msgAceptarTramite: null,
    tramite: null,
    listaTramites: null,
    listaTramitesUsuario: null,
    listaTramitesAceptados: null,
    resAceptarTramites: null,
    msgDervarTramite: null,
    resDerivarTramites: null,
    msgEliminarTramite: null,
    resEliminarTramite: null,
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

  // Listar Todos los tramites
  const listarTramites = async () => {
    try {
      const res = await clienteAxios.get("/api/tramite/listarTramites");
      dispatch({
        type: EXITO_LISTARTRAMITES,
        payload: res.data,
      });
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
    } catch (error) {
      console.log("catch-listarTramite:", error.response);
      const alerta = {
        msg: error.response.data.msg,
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_LISTARTRAMITES,
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

  // Recibir Tramites:
  //// Lista derivaciones por usuario (usuario actual)

  const listartramitesUsuario = async datos => {
    try {
      const res = await clienteAxios.post(
        "/api/tramite/listarTramitesUsuario",
        datos,
      );
      dispatch({
        type: EXITO_LISTARTRAMITEUSUARIO,
        payload: res.data,
      });
      console.log(res.data);
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
    } catch (error) {
      console.log(error.response);
      const alerta = {
        msg: error.response.data,
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_LISTARTRAMITEUSUARIO,
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

  // Listar tramites aceptados
  const listartramitesAceptados = async datos => {
    try {
      const res = await clienteAxios.post(
        "/api/tramite/listarTramitesAceptados",
        datos,
      );
      dispatch({
        type: EXITO_LISTARTRAMITEACEPTADO,
        payload: res.data,
      });
      console.log(res.data);
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
    } catch (error) {
      console.log(error.response);
      const alerta = {
        msg: error.response.data,
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_LISTARTRAMITEACEPTADO,
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

  const aceptarTramites = async idsTramites => {
    try {
      const res = await clienteAxios.post(
        "/api/tramite/aceptarTramites",
        idsTramites,
      );
      const alerta = {
        res,
        msg: "Tramite aceptado correctamente",
        classname: "bg-green-400 p-4 rounded font-bold shadow-md text-center",
      };
      console.log(alerta);
      dispatch({
        type: EXITO_ACEPTARTRAMITES,
        payload: alerta,
      });
    } catch (error) {
      console.log("catch-listarTramite:", error.response);
      const alerta = {
        msg: error.response.data.msg,
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_ACEPTARTRAMITES,
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
  const rechazarTramites = async idsTramites => {
    try {
      const res = await clienteAxios.post(
        "/api/tramite/rechazarTramites",
        idsTramites,
      );
      const alerta = {
        res,
        msg: "Tramites rechazados correctamente",
        classname: "bg-green-400 p-4 rounded font-bold shadow-md text-center",
      };
      console.log(alerta);
      dispatch({
        type: EXITO_ACEPTARTRAMITES,
        payload: alerta,
      });
    } catch (error) {
      console.log("catch-listarTramite:", error.response);
      const alerta = {
        msg: error.response.data.msg,
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_ACEPTARTRAMITES,
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

  const derivarTramites = async datos => {
    try {
      const res = await clienteAxios.post("/api/tramite/derivarTramite", datos);
      const alerta = {
        res,
        msg: "Tramite derivado correctamente",
        classname: "bg-green-400 p-4 rounded font-bold shadow-md text-center",
      };
      console.log(alerta);
      dispatch({
        type: EXITO_DERIVARTRAMITES,
        payload: alerta,
      });
    } catch (error) {
      console.log("catch-listarTramite:", error.response);
      const alerta = {
        msg: "Error al derivar el tramite",
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_DERIVARTRAMITES,
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
  const eliminarTramite = async id => {
    try {
      const res = await clienteAxios.post("/api/tramite/eliminarTramite", id);
      const alerta = {
        res,
        msg: "Tramite eliminado correctamente",
        classname: "bg-green-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: EXITO_ELIMINAR,
        payload: alerta,
      });
    } catch (error) {
      console.log("catch-listarTramite:", error.response);
      const alerta = {
        msg: "Error al eliminar el tramite",
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ERROR_ELIMINAR,
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
        listaTramites: state.listaTramites,
        msgListarTramites: state.msgListarTramites,
        msgListarTramitesUsuario: state.msgListarTramitesUsuario,
        listaTramitesUsuario: state.listaTramitesUsuario,
        msgAceptarTramite: state.msgAceptarTramite,
        resAceptarTramites: state.resAceptarTramites,
        listaTramitesAceptados: state.listaTramitesAceptados,
        msgDervarTramite: state.msgDervarTramite,
        resDerivarTramites: state.resDerivarTramites,
        msgEliminarTramite: state.msgEliminarTramite,
        resEliminarTramite: state.resEliminarTramite,
        registrarTramite,
        BuscarTramite,
        listarTramites,
        listartramitesUsuario,
        aceptarTramites,
        listartramitesAceptados,
        derivarTramites,
        rechazarTramites,
        eliminarTramite,
      }}
    >
      {props.children}
    </tramiteContext.Provider>
  );
};
export default TramiteState;
