/** Servicios API **/
import * as PvUsuarios from "../api/authUsuarios";
/** Contextos **/
import { useSistema } from "@/context/SistemaContext";
import { UsuariosContext } from "@/context/UsuariosContext";
/** Ayudas **/
import { ManejarErrorRespuesta } from "@/helpers/ManejarErrorRespuesta";

export const ProveedorUsuarios = ({ children }) => {
  const {
    PropsUsuario: { EstablecerInformacionObtenida },
  } = useSistema();

  const IniciarSesion = async (data) => {
    try {
      const res = await PvUsuarios.SolicitudIniciarSesion(data);
      EstablecerInformacionObtenida(res.data);
      return { exito: true, data: res.data };
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
