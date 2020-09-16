import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clienteAxios from "../../config/axios";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

const AuthState = props => {
  // Iniciar state con un jwt y almacenar en localstorage
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: null,
  };

  // Reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // FUNCIONES
  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "bg-red-500",
      };

      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        registrarUsuario,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
