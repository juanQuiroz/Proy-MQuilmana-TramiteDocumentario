import clienteAxios from "./axios";

const tokenAuth = token => {
  // Si existe un token (si se pasa como parametros)
  if (token) {
    clienteAxios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete clienteAxios.defaults.headers.common["x-auth-token"];
  }
};

export default tokenAuth;
