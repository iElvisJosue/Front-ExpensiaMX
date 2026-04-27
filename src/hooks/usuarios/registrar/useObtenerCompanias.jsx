/** Librerías **/
import { useEffect, useState } from "react";
/** Contextos **/
import { useUsuariosContext } from "@/context/UsuariosContext";

export default function useObtenerCompanias(rol_usuario) {
  /** Peticiones **/
  const { ApiObtenerCompanias } = useUsuariosContext();
  /** Estados **/
  const [cargando, establecerCargando] = useState(true);
  const [companias, establecerCompanias] = useState([]);

  useEffect(() => {
    async function ObtenerCompanias() {
      /** Si el rol no es SUPER ADMIN, no hacemos nada **/
      if (rol_usuario !== "SA04") return;
      try {
        const res = await ApiObtenerCompanias();
        if (res.exito) {
          const { data } = res;
          establecerCompanias(data);
        }
      } catch (error) {
        console.error("Error inesperado: ", error);
      } finally {
        establecerCargando(false);
      }
    }
    ObtenerCompanias();
  }, []); // eslint-disable-line

  return {
    cargando,
    companias,
  };
}
