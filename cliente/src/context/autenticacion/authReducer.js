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

export default (state, action) => {
  switch (action.type) {
    case RECARGANDO_PAGINA:
      return {
        ...state,
        cargando: false,
      };

    case LOGIN_EXITOSO:
      // Guardar token en localstorage
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: action.payload,
        cargando: false,
      };
    case REGISTRO_EXITOSO:
      // Guardar token en localstorage
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        msgNuevoUsuario: true,
        mensaje: action.payload,
        cargando: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: false,
        mensaje: action.payload,
        msgErrorLogin: true,
        cargando: false,
      };
    case OBTENER_USUARIO_ERROR:
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: false,
        mensaje: action.payload,
        cargando: false,
      };
    case CERRAR_SESION:
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: false,
        mensaje: action.payload,
        msgErrorLogin: false,
        cargando: false,
      };
    case REGISTRO_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        usuario: null,
        mensaje: action.payload,
        msgNuevoUsuario: true,
        cargando: false,
      };

    case LISTA_USUARIOS:
      return {
        ...state,
        listaUsuarios: action.payload,
        cargando: false,
        autenticado: true,
      };

    case ACTCONTRA_EXITOSO:
      return {
        ...state,
        msgCambiarContra: true,
        mensaje: action.payload,
      };

    case ACTCONTRA_ERROR:
      return {
        ...state,
        msgCambiarContra: true,
        mensaje: action.payload,
      };

    case OCULTAR_MENSAJE:
      return {
        ...state,
        msgNuevoUsuario: null,
        msgCambiarContra: null,
        msgErrorLogin: null,
      };

    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        cargando: false,
      };

    default:
      return state;
  }
};
