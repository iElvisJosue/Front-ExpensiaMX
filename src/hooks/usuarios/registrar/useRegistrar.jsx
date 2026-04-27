/** Librerías **/
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
/** Contextos **/
import { useSistema } from "@/context/SistemaContext";
import { useUsuariosContext } from "@/context/UsuariosContext";
/** Iconos **/
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  CursorClickIcon,
} from "@phosphor-icons/react";
/** Hooks **/
import useObtenerRoles from "@/hooks/usuarios/registrar/useObtenerRoles";
import useObtenerCompanias from "@/hooks/usuarios/registrar/useObtenerCompanias";
/** Ayudas **/
import { NotificacionesPersonalizadas } from "@/helpers/Notificaciones";
/** Roles que no necesitan una COMPAÑIA **/
const ROLES_CON_COMPANIA = [1, 2, 3];

export default function useRegistrarUsuario({
  realizandoPeticion,
  establecerRealizandoPeticion,
}) {
  /** Contextos **/
  const {
    PropsUsuario: {
      datosUsuario: { rol_usuario },
    },
  } = useSistema();
  const { ApiRegistrar } = useUsuariosContext();
  /** Peticiones **/
  const { roles, cargando: cargandoRoles } = useObtenerRoles();
  const { companias, cargando: cargandoCompanias } =
    useObtenerCompanias(rol_usuario);
  /** Desestructuramos las props **/
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  /** Estados **/
  const [verContrasena, establecerVerContrasena] = useState(false);
  const [rolSeleccionado, establecerRolSeleccionado] = useState(null);
  const [companiaSeleccionada, establecerCompaniaSeleccionada] = useState(null);

  /** Memos para selects **/
  const companiasSelect = useMemo(() => {
    if (cargandoCompanias || companias.length === 0) return [];

    return companias.map((rol) => ({
      value: rol.id,
      label: rol.nombre,
    }));
  }, [cargandoCompanias, companias]);
  const rolesSelect = useMemo(() => {
    if (cargandoRoles || roles.length === 0) return [];

    return roles.map((rol) => ({
      value: rol.id,
      label: rol.nombre,
    }));
  }, [cargandoRoles, roles]);

  const PeticionRegistrar = handleSubmit(async (data) => {
    /** Si ya estamos realizando una petición, no hacemos nada **/
    if (realizandoPeticion) return;

    /** Validamos el formulario **/
    const ES_VALIDO =
      rol_usuario === "SA04"
        ? ValidarRegistroSuperAdmin()
        : ValidarRegistroAdmin();
    if (!ES_VALIDO) return;

    /** Realizamos la petición **/
    establecerRealizandoPeticion(true);
    try {
      const res = await ApiRegistrar({
        ...data,
        id_rol: rolSeleccionado.value,
        id_compania: companiaSeleccionada?.value || null,
      });

      if (res.exito) {
        NotificacionesPersonalizadas({
          Tipo: "Exito",
          Icono: CheckCircleIcon,
          Titulo: "¡Usuario registrado!",
          Mensaje: "El usuario ha sido registrado correctamente.",
        });
        LimpiarFormulario();
      }
    } catch (error) {
      console.error("Error inesperado: ", error);
    } finally {
      establecerRealizandoPeticion(false);
    }
  });
  const ValidarRegistroAdmin = () => {
    if (!rolSeleccionado) {
      NotificacionesPersonalizadas({
        Tipo: "Info",
        Icono: CursorClickIcon,
        Titulo: "¡Rol requerido!",
        Mensaje: "Por favor, seleccione un rol para el usuario.",
      });
      return false;
    }
    return true;
  };
  const ValidarRegistroSuperAdmin = () => {
    if (!rolSeleccionado) {
      NotificacionesPersonalizadas({
        Tipo: "Info",
        Icono: CursorClickIcon,
        Titulo: "¡Rol requerido!",
        Mensaje: "Por favor, seleccione un rol para el usuario.",
      });
      return false;
    }
    if (
      ROLES_CON_COMPANIA.includes(rolSeleccionado.value) &&
      !companiaSeleccionada
    ) {
      NotificacionesPersonalizadas({
        Tipo: "Info",
        Icono: BuildingOfficeIcon,
        Titulo: "¡Compañia requerida!",
        Mensaje: "Por favor, seleccione una compañia para el usuario.",
      });
      return false;
    }
    return true;
  };
  const ManejarMostrarContrasena = () => {
    establecerVerContrasena(!verContrasena);
    const InputContrasena = document.getElementById("contrasena");
    InputContrasena.type = verContrasena ? "text" : "password";
  };
  const LimpiarFormulario = () => {
    reset();
    establecerRolSeleccionado(null);
    establecerCompaniaSeleccionada(null);
  };

  return {
    PropsUsuario: {
      rol_usuario,
    },
    PropsRoles: {
      rolesSelect,
      cargandoRoles,
      rolSeleccionado,
      establecerRolSeleccionado,
    },
    PropsCompanias: {
      companiasSelect,
      cargandoCompanias,
      companiaSeleccionada,
      establecerCompaniaSeleccionada,
    },
    PropsForm: {
      errors,
      register,
      LimpiarFormulario,
      PeticionRegistrar,
    },
    PropsContrasena: {
      verContrasena,
      ManejarMostrarContrasena,
    },
  };
}
