/** Servicios API **/
import * as PvUsuarios from "../api/authUsuarios";
/** Contextos **/
import { UsuariosContext } from "../context/UsuariosContext";
/** Ayudas **/
import { TOKEN_DE_ACCESO_SISTEMA } from "../helpers/MagicStrings";
import {
  ManejarErrorRespuesta,
} from "../helpers/ManejarRespuestasDelServidor";

export const ProveedorUsuarios = ({ children }) => {
  const IniciarSesion = async (data) => {
    try {
      const res = await PvUsuarios.SolicitudIniciarSesion(data);
      /** Obtenemos el token y lo establecemos **/
      const { Token } = res.data;
      if (Token) {
        localStorage.setItem(TOKEN_DE_ACCESO_SISTEMA, Token);
        return { exito: true, data: res.data };
      }
    } catch (error) {
      return ManejarErrorRespuesta(error);
    }
  };

  return (
    <UsuariosContext.Provider
      value={{
        IniciarSesion,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};
