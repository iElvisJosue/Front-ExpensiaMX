/** Librerias **/
import axios from "./axios";

export const SolicitudIniciarSesion = (data) =>
  axios.post("/web/usuarios/iniciar-sesion", data);
