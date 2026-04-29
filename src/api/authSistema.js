/** Librerias **/
import axios from "./axios";

export const SolicitudValidarToken = () =>
  axios.get("/sistema/validar-token");
export const SolicitudCerrarSesion = () => axios.post("/sistema/cerrar-sesion");