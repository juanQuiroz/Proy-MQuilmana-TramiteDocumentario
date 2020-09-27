import axios from "axios";

const clienteAxios2 = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL2,
});

export default clienteAxios2;
