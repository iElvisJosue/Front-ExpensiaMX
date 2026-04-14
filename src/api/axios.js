/** Libreria Axios **/
import axios from "axios";

const instance = axios.create({
  /** Utilizar en producción **/
  // baseURL: "https://immujer.ideasdistintas.com/api",
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export default instance;
