/** Librerías **/
import { useState } from "react";
/** Iconos **/
import { SpinnerGapIcon } from "@phosphor-icons/react";
/** Contextos **/
import { useUsuariosContext } from "@/context/UsuariosContext";
/** Ayudas **/
import { NotificacionesPersonalizadas } from "@/helpers/Notificaciones";

export default function useActualizarEstadoUsuario() {
  /** Contextos **/
  const { ApiActualizarEstado } = useUsuariosContext();

  /** Estados **/
  const [verListaOpciones, establecerVerListaOpciones] = useState(false);
  const [realizandoPeticion, establecerRealizandoPeticion] = useState(false);

  async function ActivarDesactivarUsuario({
    id_usuario,
    id_compania,
    activo_usuario,
  }) {
    /** Si ya estamos realizando una petición, le mostramos un aviso **/
    if (realizandoPeticion) {
      NotificacionesPersonalizadas({
        Tipo: "Info",
        Icono: SpinnerGapIcon,
        Titulo: "Realizando petición...",
        Mensaje: "Espere un momento, por favor.",
      });
      /** Retornamos esto para el botón en el card **/
      return { exito: false };
    }

    /** Realizamos la petición **/
    establecerRealizandoPeticion(true);
    try {
      const res = await ApiActualizarEstado({
        id_usuario,
        id_compania,
        activo_usuario,
      });
      return res;
    } catch (error) {
      console.error("Error inesperado: ", error);
      return { exito: false };
    } finally {
      establecerRealizandoPeticion(false);
    }
  }
  return {
    PropsVista: {
      verListaOpciones,
      establecerVerListaOpciones,
    },
    PropsPeticiones: {
      ActivarDesactivarUsuario,
    },
  };
}
