/** Librerias **/
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
/** Contextos **/
import { useUsuariosContext } from "../../context/UsuariosContext";
/** Ayudas **/
import {
  AlertaDePregunta,
  AlertaRealizandoPeticion,
} from "../../helpers/TiposDeAlertas";
import { TOKEN_DE_ACCESO_SISTEMA } from "../../helpers/MagicStrings";

export default function useIniciarSesion() {
  const { IniciarSesion } = useUsuariosContext();
  const [verContrasena, establecerVerContrasena] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    /** Mostramos una alerta de sesion activa solo
     * si el usuario tiene una cookie de acceso **/
    if (localStorage.getItem(TOKEN_DE_ACCESO_SISTEMA)) {
      AlertaDePregunta({
        Titulo: "¡Tienes una sesión activa!",
        Mensaje: "¿Quieres ir al menú principal?",
        Imagen: "images/SesionActiva.png",
        TextoBotonCancelar: "No",
        TextoBotonConfirmar: "Si, ir al menú principal",
        FuncionParaRealizar: () => {
          window.location.href = "/Inicio";
        },
      });
    }
  }, []);

  const PeticionIniciarSesion = handleSubmit(async (data) => {
    // MOSTRAMOS LA ALERTA DE REALIZANDO PETICIÓN
    // LA ALERTA SE CERRARA AUTOMATICAMENTE AL TERMINAR LA PETICIÓN
    AlertaRealizandoPeticion();
    const res = await IniciarSesion(data);
    console.log(res);
    if (res.exito) {
      setTimeout(() => {
        window.location.href = "/Inicio";
      }, 1000);
    }
  });
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
