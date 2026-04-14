/** Librerias **/
import { Navigate, Outlet } from "react-router-dom";
/** Contextos **/
import { useSistema } from "../context/SistemaContext";
/** Ayudas **/
import { PERMISOS_USUARIOS } from "../helpers/MagicStrings";

export default function SeguridadAdministradores() {
  /** Obtenemos los permisos del usuario **/
  const { PropsUsuario } = useSistema();
  const {
    datosUsuario: { permisos_usuario },
  } = PropsUsuario;
  /** Usuarios permitidos **/
  const USUARIOS_PERMITIDOS = [PERMISOS_USUARIOS.ADMINISTRADOR];
  /** Si el usuario es administrador, mostramos el contenido **/
  if (USUARIOS_PERMITIDOS.includes(permisos_usuario)) return <Outlet />;
  /** De lo contrario, redirigimos al inicio **/
  return <Navigate to="/Inicio" replace />;
}
