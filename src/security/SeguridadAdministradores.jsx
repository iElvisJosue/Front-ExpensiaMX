/** Librerias **/
import { Navigate, Outlet } from "react-router-dom";
/** Contextos **/
import { useSistemaContext } from "@/context/SistemaContext";
/** Plantilla **/
import PlantillaAdministrador from "@/layout/PlantillaAdministrador";
/** Ayudas **/
import { ROLES_USUARIO } from "@/helpers/MagicStrings";

export default function SeguridadAdministradores() {
  /** Obtenemos los permisos del usuario **/
  const { PropsUsuario } = useSistemaContext();
  const {
    datosUsuario: { rol_usuario, url_compania },
  } = PropsUsuario;

  /** Usuarios permitidos **/
  const USUARIOS_PERMITIDOS = [ROLES_USUARIO.ADMINISTRADOR];
  /** Si el usuario no esta permitido, redirigimos al inicio **/
  if (!USUARIOS_PERMITIDOS.includes(rol_usuario)) {
    const Destino = url_compania ? `/${url_compania}/inicio` : "/super-admin/inicio";
    return <Navigate to={Destino} replace />;
  }

  /** De lo contrario, mostramos el contenido **/
  return (
    <PlantillaAdministrador>
      <Outlet />
    </PlantillaAdministrador>
  );
}
