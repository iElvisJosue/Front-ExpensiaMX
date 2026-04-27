/** Librerías **/
import { useState } from "react";
/** Iconos **/
import { UsersThreeIcon } from "@phosphor-icons/react";
/** Hooks **/
import useRegistrarUsuario from "@/hooks/usuarios/registrar/useRegistrar";

export default function useUsuarios() {
  /** Estados **/
  const [verRegistrar, establecerVerRegistrar] = useState(false);
  const [realizandoPeticion, establecerRealizandoPeticion] = useState(false);
  /** Desestructamos las props **/
  const PropsRegistrar = useRegistrarUsuario({
    realizandoPeticion,
    establecerRealizandoPeticion,
  });
  /** Contenido de la vista **/
  const IconoSeccion = UsersThreeIcon;
  const TituloSeccion = "Usuarios";

  return {
    PropsVista: {
      IconoSeccion,
      TituloSeccion,
    },
    PropsModals: {
      verRegistrar,
      establecerVerRegistrar,
    },
    PropsPeticion: {
      realizandoPeticion,
      establecerRealizandoPeticion,
    },
    PropsRegistrar,
  };
}
