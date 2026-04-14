/** Librerias **/
import Swal from "sweetalert2";

export const AlertaDePregunta = async ({
  Titulo = "Titulo Alerta",
  Mensaje = "Mensaje Alerta",
  Imagen = "images/Logo.png",
  VerBotonCancelar = true,
  TextoBotonCancelar = "Cancelar",
  TextoBotonConfirmar = "Confirmar",
  FuncionParaRealizar = () => {},
}) => {
  const result = await Swal.fire({
    title: Titulo,
    text: Mensaje,
    imageUrl: Imagen,
    imageWidth: 150,
    showCancelButton: VerBotonCancelar,
    cancelButtonText: TextoBotonCancelar,
    confirmButtonText: TextoBotonConfirmar,
    reverseButtons: true,
    customClass: {
      title: "TituloDeAlerta Principal",
      htmlContainer: "ContenidoDeAlerta",
      cancelButton: "BotonDeCancelar",
      confirmButton: "BotonDeConfirmacion Principal",
      popup: "AlertaDePregunta",
    },
  });
  if (result.isConfirmed) {
    FuncionParaRealizar();
  }
};
export const AlertaRealizandoPeticion = () => {
  return Swal.fire({
    title: "¡Petición en proceso!",
    text: "Por favor, espera a que se resuelva tu petición antes de realizar otra.",
    imageUrl: "images/EnProceso.png",
    imageWidth: 150,
    allowEscapeKey: false,
    allowOutsideClick: false,
    showConfirmButton: false,
    customClass: {
      title: "TituloDeAlerta Principal",
      htmlContainer: "ContenidoDeAlerta",
      confirmButton: "BotonDeConfirmacion Principal",
      popup: "AlertaDePregunta",
    },
  });
};
