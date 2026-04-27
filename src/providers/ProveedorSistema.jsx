/** Librerias **/
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
/** Iconos **/
import { KeyIcon } from "@phosphor-icons/react";
/** API **/
import * as PvSistema from "@/api/authSistema";
/** Contextos **/
import { SistemaContext } from "@/context/SistemaContext";
import { NotificacionesPersonalizadas } from "@/helpers/Notificaciones";

export const ProveedorSistema = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  /** Controlamos la información del usuario **/
  const [tieneToken, establecerTieneToken] = useState(false);
  const [datosUsuario, establecerDatosUsuario] = useState(null);
  const [validandoToken, establecerValidandoToken] = useState(true);
  const [obtenerDatosNuevamente, establecerObtenerDatosNuevamente] =
    useState(0);
  /** Lo ponemos aqui para que no se pierda el
   * tamaño del menú al cambiar de ruta **/
  const [verMenuCompleto, establecerVerMenuCompleto] = useState(false);
  /** Controlamos si la versión del sistema web es la más reciente
   * En caso de ser necesario, mostramos el modal **/
  const [versionSistemaWeb, establecerVersionSistemaWeb] = useState(null);
  const [verModalNuevaVersion, establecerVerModalNuevaVersion] =
    useState(false);

  const EstablecerInformacionObtenida = (Usuario) => {
    establecerDatosUsuario(Usuario);
    establecerTieneToken(true);
    establecerValidandoToken(false);
  };

  const QuitarInformacionAlmacenada = () => {
    establecerTieneToken(false);
    establecerDatosUsuario(null);
    establecerValidandoToken(false);
  };

  async function ValidarTokenDeAcceso() {
    try {
      const res = await PvSistema.SolicitudValidarToken();
      /** Si el token es valido, establecemos la información **/
      if (res.status === 200) {
        const { version_web, ...datos_usuario } = res.data;
        EstablecerInformacionObtenida(datos_usuario);
        ValidarVersionDelSistema(version_web);
      }
    } catch {
      NotificacionesPersonalizadas({
        Tipo: "Info",
        Icono: KeyIcon,
        Titulo: "¡Sesión no válida!",
        Mensaje:
          "Tu sesión no es válida o ha expirado. Por favor inicia sesión nuevamente.",
      });
      QuitarInformacionAlmacenada();
    }
  }
  const ValidarVersionDelSistema = (version_web) => {
    const WEB_USUARIO_VERSION = localStorage.getItem("WEB_EXPENSIAMX_VERSION");
    /** Si el usuario tiene la versión más reciente, no hacemos nada **/
    if (WEB_USUARIO_VERSION === version_web.version) return;
    /** Si el usuario tiene una versión antigua, mostramos el modal de actualización **/
    establecerVerModalNuevaVersion(true);
    establecerVersionSistemaWeb(version_web);
  };

  /** Efecto para obtener la información del usuario
   * nuevamente. Normalmente se ejecuta cuando inicia sesion y
   * cuando actualiza la información de su perfil**/
  useEffect(() => {
    const SesionActiva = Cookies.get("SESION_ACTIVA_WEB_EXPENSIAMX");
    if (location.pathname === "/" && SesionActiva !== "SI") return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    ValidarTokenDeAcceso();
  }, [location.pathname, obtenerDatosNuevamente]); // eslint-disable-line

  const CerrarSesion = async () => {
    const res = await PvSistema.SolicitudCerrarSesion();
    if (res.status === 200) {
      navigate("/");
      QuitarInformacionAlmacenada();
    }
    return res;
  };

  return (
    <SistemaContext.Provider
      value={{
        PropsToken: {
          tieneToken,
          validandoToken,
        },
        PropsUsuario: {
          datosUsuario,
          obtenerDatosNuevamente,
          EstablecerInformacionObtenida,
          establecerObtenerDatosNuevamente,
        },
        PropsMenu: {
          verMenuCompleto,
          establecerVerMenuCompleto,
        },
        PropsActualizacion: {
          versionSistemaWeb,
          verModalNuevaVersion,
        },
        PropsPeticiones: {
          CerrarSesion,
        },
      }}
    >
      {children}
    </SistemaContext.Provider>
  );
};
