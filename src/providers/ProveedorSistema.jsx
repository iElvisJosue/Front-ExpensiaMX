/** Librerias **/
import { useState, useEffect } from "react";
/** Servicios API **/
import * as PvSistema from "../api/authSistema";
/** Contextos **/
import { SistemaContext } from "../context/SistemaContext";
/** Ayudas **/
import { TOKEN_DE_ACCESO_SISTEMA } from "../helpers/MagicStrings";

export const ProveedorSistema = ({ children }) => {
  const [tieneToken, establecerTieneToken] = useState(false);
  const [datosUsuario, establecerDatosUsuario] = useState(null);
  const [validandoToken, establecerValidandoToken] = useState(true);
  /** Lo ponemos aqui para que no se pierda el
   * tamaño del menú al cambiar de ruta **/
  const [verMenuCompleto, establecerVerMenuCompleto] = useState(false);
  const [obtenerDatosNuevamente, establecerObtenerDatosNuevamente] =
    useState(0);

  const EstablecerInformacionObtenida = (Usuario) => {
    establecerDatosUsuario(Usuario);
    establecerTieneToken(true);
    establecerValidandoToken(false);
  };

  const QuitarInformacionAlmacenada = () => {
    establecerTieneToken(false);
    establecerDatosUsuario(null);
    establecerValidandoToken(false);
    localStorage.removeItem(TOKEN_DE_ACCESO_SISTEMA);
  };

  /** Efecto para obtener la información del usuario
   * nuevamente. Normalmente se ejecuta cuando inicia sesion y
   * cuando actualiza la información de su perfil**/
  useEffect(() => {
    async function ValidarTokenDeAcceso() {
      const Token = localStorage.getItem(TOKEN_DE_ACCESO_SISTEMA);
      /** Si no tenemos un token, quitamos
       * la información almacenada **/
      if (!Token) return QuitarInformacionAlmacenada();
      try {
        const res = await PvSistema.SolicitudValidarToken({
          Token,
        });
        /** Si el token es valido, establecemos la información */
        if (res.status === 200) {
          const { DatosUsuario } = res.data;
          EstablecerInformacionObtenida(DatosUsuario);
        }
      } catch {
        QuitarInformacionAlmacenada();
      }
    }
    ValidarTokenDeAcceso();
  }, [obtenerDatosNuevamente]);

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
          establecerObtenerDatosNuevamente,
        },
        PropsMenu: {
          verMenuCompleto,
          establecerVerMenuCompleto,
        },
      }}
    >
      {children}
    </SistemaContext.Provider>
  );
};
