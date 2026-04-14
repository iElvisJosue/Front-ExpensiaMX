/** Librerias **/
import { Navigate, Outlet } from "react-router-dom";
/** Contextos **/
import { useSistema } from "../context/SistemaContext";
/** Componentes **/
import Cargando from "../components/global/Cargando";

export default function SeguridadToken() {
  const {
    PropsToken: { tieneToken, validandoToken },
  } = useSistema();
  /** Si estamos validando el token, mostramos el loader **/
  if (validandoToken) return <Cargando />;
  /** Si no tenemos un token, redirigimos al login **/
  if (!tieneToken) return <Navigate to="/" replace />;
  /** Si tenemos un token, mostramos el contenido **/
  return <Outlet />;
}
