/** Librerias **/
import axios from "./axios";
/** Ayudas **/
import { AgregarTokenPeticion } from "../helpers/AgregarTokenPeticion";

export const SolicitudValidarToken = (data) =>
  axios.post("/web/sistema/validar-token", data);
