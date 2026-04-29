/** Librerías **/
import { sileo } from "sileo";
import Cookies from "js-cookie";
import { useState } from "react";
/** Contextos **/
import { useSistemaContext } from "@/context/SistemaContext";

export default function useCerrarSesion() {
  /** Peticiones **/
  const {
    PropsPeticiones: { CerrarSesion },
  } = useSistemaContext();
  /** Estados **/
  const [realizandoPeticion, establecerRealizandoPeticion] = useState(false);

  const FinalizarSesion = (e) => {
    /** Si ya esta cerrando sesion, no hacemos nada **/
    if (realizandoPeticion) return;
    establecerRealizandoPeticion(true);
    e.preventDefault();

    const PromesaCerrandoSesion = async () => {
      try {
        await CerrarSesion();
        Cookies.remove("SESION_ACTIVA_WEB_EXPENSIAMX");
        localStorage.removeItem("SLUG_COMPANIA");
      } finally {
        establecerRealizandoPeticion(false);
      }
    };

    sileo.promise(PromesaCerrandoSesion, {
      loading: {
        title: (
          <p
            style={{
              color: "#1f1f1f",
            }}
          >
            Cerrando sesión...
          </p>
        ),
      },
      success: {
        title: (
          <p
            style={{
              color: "#ECFDF5",
            }}
          >
            ¡Sesión finalizada con éxito!
          </p>
        ),
        fill: "#166534",
      },
      error: {
        title: (
          <p
            style={{
              color: "#FEF2F2",
            }}
          >
            ¡Error al cerrar sesión!
          </p>
        ),
        fill: "#991B1B",
      },
    });
  };

  return { FinalizarSesion };
}
