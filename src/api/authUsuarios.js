/** Librerias **/
import axios from "./axios";

export const ApiIniciarSesion = (data) =>
  axios.post("/web/usuarios/iniciar-sesion", data);
export const ApiObtenerCompanias = (data) =>
  axios.get("/web/usuarios/obtener-companias", data);
export const ApiObtenerRoles = (data) =>
  axios.get("/web/usuarios/obtener-roles", data);
export const ApiRegistrar = (data) =>
  axios.post("/web/usuarios/registrar", data);