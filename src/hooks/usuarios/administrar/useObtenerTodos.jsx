/** Librerías **/
import { useEffect, useState } from "react";
/** Contextos **/
import { useUsuariosContext } from "@/context/UsuariosContext";

export default function useObtenerTodos({ Recargar }) {
  /** Peticiones **/
  const { ApiObtenerTodos } = useUsuariosContext();
  /** Estados **/
  const [cargando, establecerCargando] = useState(true);
  const [listaUsuarios, establecerListaUsuarios] = useState([]);

  useEffect(() => {
    async function ObtenerTodos() {
      try {
        const res = await ApiObtenerTodos();
        if (res.exito) {
          const { data } = res;
          establecerListaUsuarios(data);
        }
      } catch (error) {
        console.error("Error inesperado: ", error);
      } finally {
        establecerCargando(false);
      }
    }
    ObtenerTodos();
  }, [Recargar]); // eslint-disable-line

  return {
    cargando,
    listaUsuarios,
    establecerListaUsuarios
  };
}
