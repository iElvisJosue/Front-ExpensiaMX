/** Libreria Axios **/
import axios from "axios";

const instance = axios.create({
  /** Producción **/
  // baseURL: "/api",
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
  headers: {
    "x-client": "web",
  }
});

export default instance;
