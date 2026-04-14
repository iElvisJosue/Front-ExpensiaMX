/** Librerias **/
import Swal from "sweetalert2";
/** Codigos de respuesta **/
const CodigosExito = [200, 201];
const CodigosActualizacion = [204];
const CodigosWarning = [400, 401, 403, 404, 409];
const CodigosError = [500];

export const ManejarErrorRespuesta = (error) => {
  const { status, data } = error.response || {};
  NotificacionesRespuesta({
    Codigo: status,
    Mensaje: data,
  });
  return { exito: false, data };
};
const NotificacionesRespuesta = ({ Codigo, Mensaje }) => {
  if (CodigosExito.includes(Codigo)) {
    return Swal.fire({
      title: "¡Operación exitosa!",
      text: Mensaje,
      imageUrl: "Imagenes/Alerta_Exito.png",
      imageWidth: 150,
      showCancelButton: false,
      confirmButtonText: "Continuar",
      customClass: {
        title: "TituloDeAlerta Verde",
        htmlContainer: "ContenidoDeAlerta",
        confirmButton: "BotonDeConfirmacion Verde",
        popup: "AlertaDePregunta",
      },
    });
  }
  if (CodigosActualizacion.includes(Codigo)) {
    return Swal.fire({
      title: "¡Actualización exitosa!",
      text: "El registro se actualizo de manera exitosa.",
      imageUrl: "Imagenes/Alerta_Actualizacion.png",
      imageWidth: 150,
      showCancelButton: false,
      confirmButtonText: "Continuar",
      customClass: {
        title: "TituloDeAlerta Azul",
        htmlContainer: "ContenidoDeAlerta",
        confirmButton: "BotonDeConfirmacion Azul",
        popup: "AlertaDePregunta",
      },
    });
  }
  if (CodigosWarning.includes(Codigo)) {
    return Swal.fire({
      title: "¡Atención!",
      text: Mensaje,
      imageUrl: "images/Precaucion.png",
      imageWidth: 150,
      showCancelButton: false,
      confirmButtonText: "Entendido",
      customClass: {
        title: "TituloDeAlerta Naranja",
        htmlContainer: "ContenidoDeAlerta",
        confirmButton: "BotonDeConfirmacion Naranja",
        popup: "AlertaDePregunta",
      },
    });
  }
  if (CodigosError.includes(Codigo)) {
    return Swal.fire({
      title: "¡Error en el servidor!",
      text: Mensaje,
      imageUrl: "images/Error.png",
      imageWidth: 125,
      showCancelButton: false,
      confirmButtonText: "Entendido",
      customClass: {
        title: "TituloDeAlerta Rojo",
        htmlContainer: "ContenidoDeAlerta",
        cancelButton: "BotonDeCancelar",
        confirmButton: "BotonDeConfirmacion Rojo",
        popup: "AlertaDePregunta",
      },
    });
  }
  return Swal.fire({
    title: "¡Error inesperado!",
    text: "Ha ocurrido un error inesperado. Por favor inténtalo de nuevo.",
    imageUrl: "images/Error.png",
    imageWidth: 125,
    showCancelButton: false,
    confirmButtonText: "Intentar nuevamente",
    customClass: {
      title: "TituloDeAlerta Rojo",
      htmlContainer: "ContenidoDeAlerta Rojo",
      cancelButton: "BotonDeCancelar",
      confirmButton: "BotonDeConfirmacion Rojo",
      popup: "AlertaDePregunta",
    },
  });
};
