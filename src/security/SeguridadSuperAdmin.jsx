/** Librerias **/
import { Navigate, Outlet } from "react-router-dom";
/** Contextos **/
import { useSistema } from "@/context/SistemaContext";
/** Plantilla **/
import PlantillaSuperAdmin from "@/layout/PlantillaSuperAdmin";
/** Ayudas **/
import { ROLES_USUARIO } from "@/helpers/MagicStrings";

export default function SeguridadSuperAdmin() {
  /** Obtenemos los permisos del usuario **/
  const { PropsUsuario } = useSistema();
  const {
    datosUsuario: { rol_usuario, url_compania },
  } = PropsUsuario;

  /** Usuarios permitidos **/
  const USUARIOS_PERMITIDOS = [ROLES_USUARIO.SUPER_ADMIN];

  /** Si el usuario no esta permitido, redirigimos al inicio **/
  if (!USUARIOS_PERMITIDOS.includes(rol_usuario))
    return <Navigate to={`/${url_compania}/inicio`} replace />;

  /** De lo contrario, mostramos el contenido **/
  return (
    <PlantillaSuperAdmin>
      <Outlet />
    </PlantillaSuperAdmin>
  );
}
