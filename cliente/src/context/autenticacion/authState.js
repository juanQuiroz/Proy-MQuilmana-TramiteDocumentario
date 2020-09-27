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
  OBTENER_USUARIO_ERROR,
  RECARGANDO_PAGINA,
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
    msgErrorLogin: null,
    listaUsuarios: {},
    cargando: true,
    cargando2: true,
  };

  // Reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // FUNCIONES

  // Recargando pagina
  const recargarPagina = () => {
    dispatch({
      type: RECARGANDO_PAGINA,
    });
  };

  // // Registra un nuevo usuario
  const registrarUsuario = async datos => {
    try {
      var respuesta = await clienteAxios.post("/api/usuarios", datos);
      console.log(respuesta);
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
      console.log(error.response);
      const alerta = {
        msg: error.response.data.msg,
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
        type: OBTENER_USUARIO_ERROR,
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
        classname: "bg-red-400 p-4 rounded font-bold shadow-md text-center",
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
        msgErrorLogin: state.msgErrorLogin,
        autenticado: state.autenticado,
        usuario: state.usuario,
        cargando2: state.cargando2,
        registrarUsuario,
        listarUsuarios,
        actualizarContraseña,
        ususarioAutenticado,
        iniciarSesion,
        cerrarSesion,
        recargarPagina,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
