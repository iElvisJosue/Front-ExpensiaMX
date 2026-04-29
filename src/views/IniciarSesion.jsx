/** Iconos **/
import {
  EyeIcon,
  EyeSlashIcon,
  PasswordIcon,
  UserIcon,
} from "@phosphor-icons/react";
/** Hooks **/
import useIniciarSesion from "@/hooks/iniciar-sesion/useIniciarSesion";
/** Componentes **/
import InputTextLogin from "@/components/inputs/InputTextLogin";
/** Ayudas **/
import { RUTAS_IMAGENES } from "@/helpers/RutasImagenes";
import { NOMBRE_SISTEMA } from "@/helpers/MagicStrings";
import { MENSAJES_DE_VALIDACION } from "@/helpers/MensajesValidaciones";
/** Estilos **/
import "../styles/views/IniciarSesion.css";

export default function IniciarSesion() {
  const {
    errors,
    register,
    verContrasena,
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
          src={RUTAS_IMAGENES.Logo}
          alt="Logo Sistema"
          className="IniciarSesion__Formulario--Imagen"
        />
        <h2 className="IniciarSesion__Formulario--Titulo">
          ¡Bienvenido al sistema {NOMBRE_SISTEMA}!
        </h2>
        <InputTextLogin
          Label="Usuario"
          IconoIzquierda={UserIcon}
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
        <InputTextLogin
          Label="Contraseña"
          IconoIzquierda={PasswordIcon}
          IconoDerecha={verContrasena ? EyeSlashIcon : EyeIcon}
          onDerecha={ManejarMostrarContrasena}
          NombreCampo="contrasena"
          TipoCampo={verContrasena ? "text" : "password"}
          register={register("contrasena", {
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
