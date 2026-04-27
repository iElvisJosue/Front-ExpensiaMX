/** Iconos **/
import { AtIcon, EyeIcon, EyeSlashIcon, UserIcon } from "@phosphor-icons/react";
/** Componentes **/
import InputText from "@/components/inputs/InputText";
import InputSelect from "@/components/inputs/InputSelect";
import InputPassword from "@/components/inputs/InputPassword";
/** Ayudas **/
import { REGEX_CORREO } from "@/helpers/Regex";
import { MENSAJES_DE_VALIDACION } from "@/helpers/MensajesValidaciones";
/** Estilos **/
import "../../../styles/components/usuarios/registrar/Registrar.css";

export default function Registrar(PropsRegistrar) {
  const {
    PropsUsuario: { rol_usuario },
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
    PropsForm: { errors, register },
    PropsContrasena: { verContrasena, ManejarMostrarContrasena },
  } = PropsRegistrar;

  return (
    <div className="RegistrarUsuario">
      <h1 className="RegistrarUsuario__Titulo">Información de la cuenta</h1>
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
      <h1 className="RegistrarUsuario__Titulo">Credenciales</h1>
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
  );
}
