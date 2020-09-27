import {
  EXITO_REGISTARTRAMITE,
  ERROR_REGISTARTRAMITE,
  EXITO_SUBIRARCHIVO,
  ERROR_SUBIRARCHIVO,
  OCULTAR_MENSAJE,
  OCULTAR_MENSAJE_COD,
  EXITO_BUSCARPORCOD,
  ERROR_BUSCARPORCOD,
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
    case ERROR_REGISTARTRAMITE:
      return {
        ...state,
        msgRegistrarTramite: true,
        mensaje: action.payload,
      };

    case EXITO_BUSCARPORCOD:
      return {
        ...state,
        tramite: action.payload,
      };
    case ERROR_BUSCARPORCOD:
      return {
        ...state,
        msgBuscarTramite: true,
        mensaje: action.payload,
      };

    case OCULTAR_MENSAJE:
      return {
        ...state,
        msgRegistrarTramite: null,
        msgSubirArchivo: null,
        msgBuscarTramite: null,
      };

    case OCULTAR_MENSAJE_COD:
      return {
        ...state,
        msgCodTramite: null,
      };

    default:
      return state;
  }
};
