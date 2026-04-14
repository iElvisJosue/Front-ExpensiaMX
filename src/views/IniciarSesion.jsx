/** Iconos **/
import { PasswordIcon, UserIcon } from "@phosphor-icons/react";
/** Hooks **/
import useIniciarSesion from "@/hooks/IniciarSesion/useIniciarSesion";
/** Componentes **/
import InputText from "@/components/global/InputText";
/** Ayudas **/
import { NOMBRE_SISTEMA } from "@/helpers/MagicStrings";
import { MENSAJES_DE_VALIDACION } from "@/helpers/MensajesValidaciones";
/** Estilos **/
import "../styles/views/IniciarSesion.css";

export default function IniciarSesion() {
  const {
    errors,
    register,
    verContrasena,
    CampoRequerido,
    PeticionIniciarSesion,
    ManejarMostrarContrasena,
  } = useIniciarSesion();

  return (
    <main className="IniciarSesion">
      <form
        className="IniciarSesion__Formulario"
        onSubmit={PeticionIniciarSesion}
      >
        <img
          src="images/Logo.png"
          alt="Logo Sistema"
          className="IniciarSesion__Formulario--Imagen"
        />
        <h2 className="IniciarSesion__Formulario--Titulo">
          ¡Bienvenido al sistema {NOMBRE_SISTEMA}!
        </h2>
        <InputText
          Label="Usuario"
          Icono={UserIcon}
          NombreCampo="Usuario"
          register={register("Usuario", {
            required: MENSAJES_DE_VALIDACION.REQUERIDO,
            maxLength: {
              value: 255,
              message: MENSAJES_DE_VALIDACION.MAX255,
            },
          })}
          errors={errors}
        />
        <InputText
          Label="Contraseña"
          Icono={PasswordIcon}
          NombreCampo="Contrasena"
          register={register("Contrasena", {
            required: MENSAJES_DE_VALIDACION.REQUERIDO,
          })}
          errors={errors}
        />
        <button type="submit" className="IniciarSesion__Formulario--Boton">
          ENTRAR
        </button>
      </form>
    </main>
  );
}
