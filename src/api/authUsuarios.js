/** Librerias **/
import axios from "./axios";
/** Ayudas **/
import {
  // COOKIE_CON_TOKEN,
  AgregarTokenPeticion,
} from "../helpers/AgregarTokenPeticion";

export const SolicitudIniciarSesion = (data) =>
  axios.post("/web/usuarios/iniciar-sesion", data);
