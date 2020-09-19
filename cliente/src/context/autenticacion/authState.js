import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  LISTA_USUARIOS,
  ACTCONTRA_EXITOSO,
  ACTCONTRA_ERROR,
  OCULTAR_MENSAJE,
} from "../../types";

const AuthState = props => {
  // Iniciar state con un jwt y almacenar en localstorage
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: {},
    msgNuevoUsuario: null,
    msgCambiarContra: null,
    listaUsuarios: {},
    cargando: true,
  };

  // Reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // FUNCIONES
  // // Registra un nuevo usuario
  const registrarUsuario = async datos => {
    try {
      await clienteAxios.post("/api/usuarios", datos);
      const alerta = {
        msg: "Usuario creado correctamente",
        classname: "bg-green-400 p-4 rounded font-bold shadow-md text-center",
      };
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: alerta,
      });
      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
    } catch (error) {
      const alerta = {
        msg: "Error al crear usuario",
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: REGISTRO_ERROR,
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

  // Actualizar contraseña
  const actualizarContraseña = async datos => {
    try {
      await clienteAxios.post("/api/usuarios/actualizarpass", datos);

      const alerta = {
        msg: "Contraseña Actualizada correctamente",
        classname: "bg-green-400 p-4 rounded font-bold shadow-md text-center",
      };

      dispatch({
        type: ACTCONTRA_EXITOSO,
        payload: alerta,
      });

      // Ocultar la alerta despues de 5 segundos
      setTimeout(() => {
        dispatch({
          type: OCULTAR_MENSAJE,
        });
      }, 4000);
    } catch (error) {
      const alerta = {
        msg: "Error al actualizar contraseña",
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
      };
      dispatch({
        type: ACTCONTRA_ERROR,
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

  //  Listar usuarios
  const listarUsuarios = async () => {
    try {
      const respuesta = await clienteAxios.get("/api/usuarios");
      dispatch({
        type: LISTA_USUARIOS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Retorna el usuario autenticado
  const ususarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      // TODO: funcion para enviar el token por headers
      // Le pasamos el token obtenido de localStorage
      tokenAuth(token);
    }
    try {
      const respuesta = await clienteAxios.get("/api/auth");

      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // Cuando el usuario inicia sesion
  const iniciarSesion = async datos => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      ususarioAutenticado();
    } catch (error) {
      console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  // Cierra la esion del usuario
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        listaUsuarios: state.listaUsuarios,
        cargando: state.cargando,
        mensaje: state.mensaje,
        msgNuevoUsuario: state.msgNuevoUsuario,
        msgCambiarContra: state.msgCambiarContra,
        autenticado: state.autenticado,
        usuario: state.usuario,
        registrarUsuario,
        listarUsuarios,
        actualizarContraseña,
        ususarioAutenticado,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
