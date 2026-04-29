/** Librerías **/
import { useMemo, useState } from "react";
/** Iconos **/
import { UsersThreeIcon } from "@phosphor-icons/react";
/** Contextos **/
import { useSistemaContext } from "@/context/SistemaContext";
/** Hooks **/
import useObtenerRoles from "@/hooks/usuarios/registrar/useObtenerRoles";
import useObtenerTodos from "@/hooks/usuarios/administrar/useObtenerTodos";
import useObtenerCompanias from "@/hooks/usuarios/registrar/useObtenerCompanias";

export default function useUsuarios() {
  /** Contextos **/
  const {
    PropsUsuario: {
      datosUsuario: { rol_usuario },
    },
  } = useSistemaContext();
  /** Estados para modals **/
  const [verRegistrar, establecerVerRegistrar] = useState(false);
  const [verActualizar, establecerVerActualizar] = useState(false);
  /** Estados para las peticiones **/
  const [usuarioEditar, establecerUsuarioEditar] = useState(null);
  const [recargarUsuarios, establecerRecargarUsuarios] = useState(0);

  /** Hooks para obtener los datos que iran en los formularios **/
  const { roles, cargando: cargandoRoles } = useObtenerRoles();
  const { companias, cargando: cargandoCompanias } =
    useObtenerCompanias(rol_usuario);

  /** Hooks generales para toda la vista **/
  const PropsListado = useObtenerTodos({ Recargar: recargarUsuarios });

  /** Memos para selects. Se ponen en el padre para no volver a hacer
   * peticiones cada que se abre el modal de registro/actualización **/
  const companiasSelect = useMemo(() => {
    if (cargandoCompanias || companias.length === 0) return [];

    return companias.map((rol) => ({
      value: rol.id,
      label: rol.nombre,
      logo: rol.logo,
    }));
  }, [cargandoCompanias, companias]);
  const rolesSelect = useMemo(() => {
    if (cargandoRoles || roles.length === 0) return [];

    return roles.map((rol) => ({
      value: rol.id,
      label: rol.nombre,
    }));
  }, [cargandoRoles, roles]);

  /** Contenido de la vista **/
  const IconoSeccion = UsersThreeIcon;
  const TituloSeccion = "Usuarios";

  /** Funciones de apoyo **/
  function RecargarUsuarios() {
    establecerRecargarUsuarios((prev) => prev + 1);
  }
  /** Funciones para evitar volver a llamar al back **/
  function ActualizarEstadoLocal(id_usuario) {
    const { establecerListaUsuarios } = PropsListado;
    establecerListaUsuarios((prev) =>
      prev.map((user) =>
        user.id_usuario === id_usuario
          ? { ...user, activo_usuario: !user.activo_usuario }
          : user,
      ),
    );
  }
  function ActualizarUsuarioLocal(usuario) {
    const { establecerListaUsuarios } = PropsListado;
    establecerListaUsuarios((prev) =>
      prev.map((u) =>
        u.id_usuario === usuario.id_usuario ? usuario : u,
      ),
    );
    establecerVerActualizar(false);
  }

  /** Props Reusables **/
  const PropsUsuario = {
    rol_usuario,
  };
  const PropsSelects = {
    rolesSelect,
    companiasSelect,
    cargandoRoles,
    cargandoCompanias,
  };

  return {
    PropsVista: {
      IconoSeccion,
      TituloSeccion,
      establecerUsuarioEditar
    },
    PropsModals: {
      verRegistrar,
      establecerVerRegistrar,
      verActualizar,
      establecerVerActualizar,
    },
    PropsPeticiones: {
      ActualizarEstadoLocal,
    },
    PropsListado,
    PropsRegistrar: {
      PropsUsuario,
      PropsSelects,
      RecargarUsuarios,
      onCerrar: () => establecerVerRegistrar(false),
    },
    PropsActualizar: {
      PropsUsuario,
      PropsSelects,
      UsuarioEditar: usuarioEditar,
      onCerrar: () => establecerVerActualizar(false),
      onActualizarUsuarioLocal: ActualizarUsuarioLocal,
    },
  };
}
