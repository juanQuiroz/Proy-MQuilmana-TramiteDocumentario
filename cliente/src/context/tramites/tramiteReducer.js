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
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case EXITO_REGISTARTRAMITE:
      return {
        ...state,
        msgRegistrarTramite: true,
        msgCodTramite: true,
        mensaje: action.payload,
      };
    case EXITO_LISTARTRAMITEUSUARIO:
      return {
        ...state,
        msgListarTramitesUsuario: true,
        listaTramitesUsuario: action.payload,
      };
    case ERROR_REGISTARTRAMITE:
      return {
        ...state,
        msgRegistrarTramite: true,
        listaTramitesUsuario: action.payload,
      };
    case ERROR_LISTARTRAMITEUSUARIO:
      return {
        ...state,
        msgListarTramitesUsuario: true,
        mensaje: action.payload,
      };

    case EXITO_BUSCARPORCOD:
      return {
        ...state,
        tramite: action.payload,
        listaTramites: null,
      };
    case ERROR_BUSCARPORCOD:
      return {
        ...state,
        msgBuscarTramite: true,
        mensaje: action.payload,
      };
    case EXITO_LISTARTRAMITES:
      return {
        ...state,
        listaTramites: action.payload,
        tramite: null,
      };

    case ERROR_LISTARTRAMITES:
      return {
        ...state,
        msgListarTramites: true,
        mensaje: action.payload,
      };

    // por que lo tengo que poner en null
    case OCULTAR_MENSAJE:
      return {
        ...state,
        msgRegistrarTramite: null,
        msgSubirArchivo: null,
        msgBuscarTramite: null,
        msgListarTramites: null,
        msgListarTramitesUsuario: null,
        msgAceptarTramite: null,
      };

    case OCULTAR_MENSAJE_COD:
      return {
        ...state,
        msgCodTramite: null,
      };

    case EXITO_ACEPTARTRAMITES:
      return {
        ...state,
        msgAceptarTramite: true,
        resAceptarTramites: action.payload,
      };
    case ERROR_ACEPTARTRAMITES:
      return {
        ...state,
        msgAceptarTramite: true,
        resAceptarTramites: action.payload,
      };
    case EXITO_ELIMINAR:
    case ERROR_ELIMINAR:
      return {
        ...state,
        msgEliminarTramite: true,
        resEliminarTramite: action.payload,
      };
    case EXITO_DERIVARTRAMITES:
    case ERROR_DERIVARTRAMITES:
      return {
        ...state,
        msgDervarTramite: true,
        resDerivarTramites: action.payload,
      };

    case EXITO_LISTARTRAMITEACEPTADO:
      return {
        ...state,
        listaTramitesAceptados: action.payload,
      };
    case ERROR_LISTARTRAMITEACEPTADO:
      return {
        ...state,
        listaTramitesAceptados: action.payload,
      };

    default:
      return state;
  }
};
