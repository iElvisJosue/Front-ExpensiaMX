/** Librerias **/
import axios from "./axios";

export const SolicitudValidarToken = () =>
  axios.get("/web/sistema/validar-token");
export const SolicitudCerrarSesion = () => axios.post("/web/sistema/cerrar-sesion");