/** Librerias **/
import axios from "./axios";

export const ApiIniciarSesion = (data) =>
  axios.post("/usuarios/iniciar-sesion", data);
export const ApiObtenerCompanias = (data) =>
  axios.get("/usuarios/obtener-companias", data);
export const ApiObtenerRoles = (data) =>
  axios.get("/usuarios/obtener-roles", data);
export const ApiRegistrar = (data) =>
  axios.post("/usuarios/registrar", data);
export const ApiObtenerTodos = (data) =>
  axios.get("/usuarios/obtener-todos", data);
export const ApiActualizarEstado = (data) =>
  axios.patch("/usuarios/actualizar-estado", data);
export const ApiActualizarInformacion = (data) =>
  axios.put("/usuarios/actualizar-informacion", data);
