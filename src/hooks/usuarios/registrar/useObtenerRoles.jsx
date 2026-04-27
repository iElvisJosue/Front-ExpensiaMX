/** Librerías **/
import { useEffect, useState } from "react";
/** Contextos **/
import { useUsuariosContext } from "@/context/UsuariosContext";

export default function useObtenerRoles() {
  /** Peticiones **/
  const { ApiObtenerRoles } = useUsuariosContext();
  /** Estados **/
  const [roles, establecerRoles] = useState([]);
  const [cargando, establecerCargando] = useState(true);

  useEffect(() => {
    async function ObtenerRoles() {
      try {
        const res = await ApiObtenerRoles();
        if (res.exito) {
          const { data } = res;
          establecerRoles(data);
        }
      } catch (error) {
        console.error("Error inesperado: ", error);
      } finally {
        establecerCargando(false);
      }
    }
    ObtenerRoles();
  }, []); // eslint-disable-line

  return {
    roles,
    cargando,
  };
}
