/** Librerías **/
import { sileo } from "sileo";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
/** Contextos **/
import { useSistema } from "@/context/SistemaContext";
import { useUsuariosContext } from "@/context/UsuariosContext";
/** Ayudas **/
import { NotificacionesPersonalizadas } from "@/helpers/Notificaciones";
import { ArrowRightIcon, ChecksIcon } from "@phosphor-icons/react";
import { ROLES_USUARIO } from "@/helpers/MagicStrings";

export default function useIniciarSesion() {
  /** Navegación **/
  const navigate = useNavigate();
  /** Peticiones **/
  const { IniciarSesion } = useUsuariosContext();
  /** Desestructuramos las props **/
  const {
    PropsToken: { tieneToken },
  } = useSistema();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  /** Estados **/
  const [verContrasena, establecerVerContrasena] = useState(false);
  const [realizandoPeticion, establecerRealizandoPeticion] = useState(false);

  /** Efecto para comprobar si ya hay una sesión iniciada **/
  useEffect(() => {
    if (tieneToken) {
      /** Obtenemos el slug **/
      const Slug = localStorage.getItem("SLUG_COMPANIA");
      const Destino = Slug ? `/${Slug}/inicio` : "/super-admin/inicio";
      NotificacionesPersonalizadas({
        Tipo: "Accion",
        Icono: ArrowRightIcon,
        Titulo: "¡Sesión activa!",
        Mensaje: "Parece que ya tienes una sesión activa. ¿Deseas continuar?",
        TextoBoton: "Continuar",
        onBoton: () => {
          navigate(Destino);
          sileo.clear();
        },
      });
    }
  }, [tieneToken]); // eslint-disable-line

  const PeticionIniciarSesion = handleSubmit(async (data) => {
    /** Si estamos realizando la petición, no hacemos nada **/
    if (realizandoPeticion) return;
    establecerRealizandoPeticion(true);
    const res = await IniciarSesion(data);
    establecerRealizandoPeticion(false);
    if (res.exito) {
      /** Creamos la cookie de sesion iniciada **/
      Cookies.set("SESION_ACTIVA_WEB_EXPENSIAMX", "SI", { expires: 1 });
      /** Mostramos una notificación de exito **/
      NotificacionesPersonalizadas({
        Tipo: "Exito",
        Icono: ChecksIcon,
        Titulo: "¡Sesión iniciada!",
        Mensaje: "Has iniciado sesión con éxito. ¡Bienvenido! 🫡",
      });
      /** Redireccionamos a la pantalla de inicio **/
      const { rol_usuario, url_compania } = res.data;
      /** Guardamos el slug de la compania para usarlo en la navegación
       * en caso de ser necesario (Sesión activa) **/
      if (rol_usuario !== ROLES_USUARIO.SUPER_ADMIN) {
        localStorage.setItem("SLUG_COMPANIA", url_compania);
      }
      ManejarRedireccionamiento({
        Rol: rol_usuario,
        Slug: url_compania,
      });
    }
  });
  const ManejarRedireccionamiento = ({ Rol, Slug }) => {
    if (Rol === ROLES_USUARIO.SUPER_ADMIN)
      return navigate("/super-admin/inicio");
    navigate(`/${Slug}/inicio`);
  };
  const ManejarMostrarContrasena = () => {
    establecerVerContrasena(!verContrasena);
    const InputContrasena = document.getElementById("ContrasenaUsuario");
    InputContrasena.type = verContrasena ? "text" : "password";
  };
  const CampoRequerido = (NombreCampo) => {
    return (
      <ErrorMessage
        errors={errors}
        name={NombreCampo}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <small key={type} className="CampoRequerido">
              {message}
            </small>
          ))
        }
      />
    );
  };

  return {
    errors,
    register,
    verContrasena,
    CampoRequerido,
    PeticionIniciarSesion,
    ManejarMostrarContrasena,
  };
}
