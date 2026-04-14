/** Ayudas **/
import { TOKEN_DE_ACCESO_SISTEMA } from "./MagicStrings";
/** Cookie de acceso **/
export const TokenAcceso = localStorage.getItem(TOKEN_DE_ACCESO_SISTEMA);
/** Funcion para agregar el token de acceso a la petición **/
export const AgregarTokenPeticion = (data = {}) => {
  return { ...data, TokenAcceso };
};
