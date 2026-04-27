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

  const ApiIniciarSesion = async (data) => {
    try {
      const res = await PvUsuarios.ApiIniciarSesion(data);
      EstablecerInformacionObtenida(res.data);
      return { exito: true, data: res.data };
    } catch (error) {
      return ManejarErrorRespuesta(error);
    }
  };
  const ApiObtenerCompanias = async (data) => {
    try {
      const res = await PvUsuarios.ApiObtenerCompanias(data);
      return { exito: true, data: res.data };
    } catch (error) {
      return ManejarErrorRespuesta(error);
    }
  };
  const ApiObtenerRoles = async (data) => {
    try {
      const res = await PvUsuarios.ApiObtenerRoles(data);
      return { exito: true, data: res.data };
    } catch (error) {
      return ManejarErrorRespuesta(error);
    }
  };
  const ApiRegistrar = async (data) => {
    try {
      const res = await PvUsuarios.ApiRegistrar(data);
      return { exito: true, data: res.data };
    } catch (error) {
      return ManejarErrorRespuesta(error);
    }
  };

  return (
    <UsuariosContext.Provider
      value={{
        ApiIniciarSesion,
        ApiObtenerCompanias,
        ApiObtenerRoles,
        ApiRegistrar
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};
