/** Librerias **/
import { createContext, useContext } from "react";
/** Creamos el contexto **/
export const UsuariosContext = createContext();

export const useUsuariosContext = () => {
  const context = useContext(UsuariosContext);
  if (!context) {
    throw new Error(
      "useUsuariosContext debería ser usado dentro de Proveedor USUARIOS"
    );
  }
  return context;
};
