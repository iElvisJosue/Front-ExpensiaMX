/** Ayudas **/
import { NotificacionesRespuesta } from "@/helpers/Notificaciones";

export const ManejarErrorRespuesta = (error) => {
  const { status, data } = error.response || {};
  NotificacionesRespuesta({
    Codigo: status,
    Mensaje: data,
  });
  return { exito: false, status, data };
};
