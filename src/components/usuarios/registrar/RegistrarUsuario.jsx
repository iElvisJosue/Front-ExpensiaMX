/** Iconos **/
import {
  AtIcon,
  EyeIcon,
  EyeSlashIcon,
  UserCirclePlusIcon,
  UserIcon,
} from "@phosphor-icons/react";
/** Hooks **/
import useRegistrarUsuario from "@/hooks/usuarios/registrar/useRegistrar";
/** Componentes **/
import Cargando from "@/components/global/Cargando";
import InputText from "@/components/inputs/InputText";
import InputSelect from "@/components/inputs/InputSelect";
import InputPassword from "@/components/inputs/InputPassword";
import ModalFormularios from "@/components/modals/ModalFormularios";
/** Ayudas **/
import { REGEX_CORREO } from "@/helpers/Regex";
import { MENSAJES_DE_VALIDACION } from "@/helpers/MensajesValidaciones";
/** Estilos **/
import "../../../styles/components/usuarios/registrar/RegistrarUsuario.css";

export default function RegistrarUsuario(PropsRegistrar) {
  /** Desestructuramos las props **/
  const {
    PropsUsuario: { rol_usuario },
    PropsSelects: {
      rolesSelect,
      companiasSelect,
      cargandoRoles,
      cargandoCompanias,
    },
    onCerrar,
    RecargarUsuarios,
  } = PropsRegistrar;
  /** Desestructuramos las props del hook **/
  const {
    PropsContrasena: { verContrasena, ManejarMostrarContrasena },
    PropsForm: { errors, register },
    PropsDatos: {
      rolSeleccionado,
      establecerRolSeleccionado,
      companiaSeleccionada,
      establecerCompaniaSeleccionada,
    },
    PropsPeticiones: { PeticionRegistrar, realizandoPeticion },
  } = useRegistrarUsuario({
    rol_usuario,
    onRecargarUsuarios: RecargarUsuarios,
  });

  return (
    <ModalFormularios onCerrar={onCerrar}>
      {realizandoPeticion ? (
        <Cargando Clase="Transparente" Texto="Realizando petición.." />
      ) : (
        <form className="RegistrarUsuario" onSubmit={PeticionRegistrar}>
          <div className="RegistrarUsuario__Contenido">
            <h1 className="RegistrarUsuario__Contenido--Titulo">
              Información de la cuenta
            </h1>
            <InputSelect
              Label="Rol"
              Opciones={rolesSelect}
              Value={rolSeleccionado}
              onChange={(r) => establecerRolSeleccionado(r)}
              Cargando={cargandoRoles}
            />
            {/* Select de companias solo si el rol es SUPER ADMIN */}
            {rol_usuario === "SA04" && (
              <InputSelect
                Label="Compañia"
                Opciones={companiasSelect}
                Value={companiaSeleccionada}
                onChange={(c) => establecerCompaniaSeleccionada(c)}
                Cargando={cargandoCompanias}
              />
            )}
            <h1 className="RegistrarUsuario__Contenido--Titulo">
              Credenciales
            </h1>
            {/* Usuario */}
            <InputText
              Label="Usuario"
              Icono={UserIcon}
              NombreCampo="usuario"
              register={register("usuario", {
                required: MENSAJES_DE_VALIDACION.REQUERIDO,
                maxLength: {
                  value: 255,
                  message: MENSAJES_DE_VALIDACION.MAX255,
                },
              })}
              errors={errors}
            />
            {/* Contraseña */}
            <InputPassword
              Label="Contraseña"
              NombreCampo="contrasena"
              TipoCampo={verContrasena ? "text" : "password"}
              IconoDerecha={verContrasena ? EyeSlashIcon : EyeIcon}
              onDerecha={ManejarMostrarContrasena}
              register={register("contrasena", {
                required: MENSAJES_DE_VALIDACION.REQUERIDO,
                maxLength: {
                  value: 255,
                  message: MENSAJES_DE_VALIDACION.MAX255,
                },
              })}
              errors={errors}
            />
            {/* Correo */}
            <InputText
              Columnas="Completo"
              Label="Correo"
              Icono={AtIcon}
              NombreCampo="correo"
              register={register("correo", {
                required: MENSAJES_DE_VALIDACION.REQUERIDO,
                pattern: REGEX_CORREO,
                maxLength: {
                  value: 255,
                  message: MENSAJES_DE_VALIDACION.MAX255,
                },
              })}
              errors={errors}
            />
          </div>
          <button className="RegistrarUsuario__Boton" type="submit">
            <UserCirclePlusIcon size={20} weight="regular" />
            Registrar usuario
          </button>
        </form>
      )}
    </ModalFormularios>
  );
}
