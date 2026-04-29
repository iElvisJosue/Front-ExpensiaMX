/** Librerías **/
import { useState } from "react";
import { useForm } from "react-hook-form";
/** Iconos **/
import { BuildingOfficeIcon, CursorClickIcon } from "@phosphor-icons/react";
/** Contextos **/
import { useUsuariosContext } from "@/context/UsuariosContext";
/** Ayudas **/
import { NotificacionesPersonalizadas } from "@/helpers/Notificaciones";
/** Roles que no necesitan una COMPAÑIA **/
const ROLES_CON_COMPANIA = [1, 2, 3];

export default function useActualizarUsuario({
  rol_usuario,
  usuario_editar,
  onActualizarUsuarioLocal,
}) {
  /** Contextos **/
  const { ApiActualizarInformacion } = useUsuariosContext();

  /** Estados **/
  const [rolSeleccionado, establecerRolSeleccionado] = useState({
    value: usuario_editar?.id_rol,
    label: usuario_editar?.nombre_rol,
  });
  const [companiaSeleccionada, establecerCompaniaSeleccionada] = useState({
    value: usuario_editar?.id_compania,
    label: usuario_editar?.nombre_compania,
    logo: usuario_editar?.logo_compania,
  });
  const [realizandoPeticion, establecerRealizandoPeticion] = useState(false);

  /** Form **/
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      usuario: usuario_editar?.nombre_usuario,
      correo: usuario_editar?.correo_usuario,
    },
  });

  /** Funciones para el formulario **/
  const PeticionActualizar = handleSubmit(async (data) => {
    /** Si ya estamos realizando una petición, no hacemos nada **/
    if (realizandoPeticion) return;

    /** Validamos el formulario **/
    const ES_VALIDO =
      rol_usuario === "SA04"
        ? ValidarActualizacionSuperAdmin()
        : ValidarActualizacionAdmin();
    if (!ES_VALIDO) return;

    /** Realizamos la petición **/
    establecerRealizandoPeticion(true);
    try {
      const res = await ApiActualizarInformacion({
        ...data,
        id_usuario_actualizar: usuario_editar.id_usuario,
        id_rol: rolSeleccionado.value,
        id_compania: companiaSeleccionada?.value ?? undefined,
      });
      if (res.exito) {
        onActualizarUsuarioLocal({
          id_usuario: usuario_editar.id_usuario,
          nombre_usuario: data.usuario,
          correo_usuario: data.correo,
          activo_usuario: usuario_editar.activo_usuario,
          id_rol: rolSeleccionado.value,
          nombre_rol: rolSeleccionado.label,
          id_compania: companiaSeleccionada.value ?? null,
          nombre_compania: companiaSeleccionada.label ?? null,
          logo_compania: companiaSeleccionada.logo ?? null,
        });
      }
    } catch (error) {
      console.error("Error inesperado: ", error);
    } finally {
      establecerRealizandoPeticion(false);
    }
  });
  function ValidarActualizacionAdmin() {
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
  }
  function ValidarActualizacionSuperAdmin() {
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
  }

  return {
    PropsForm: {
      errors,
      register,
    },
    PropsDatos: {
      rolSeleccionado,
      establecerRolSeleccionado,
      companiaSeleccionada,
      establecerCompaniaSeleccionada,
    },
    PropsPeticiones: {
      PeticionActualizar,
      realizandoPeticion,
    },
  };
}
