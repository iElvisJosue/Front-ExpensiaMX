/** Librerías **/
import { useState } from "react";
/** Iconos **/
import { GearSixIcon, PlusCircleIcon } from "@phosphor-icons/react";
/** Componentes **/
import Registrar from "@/components/companias/registrar/Registrar";
import Administrar from "@/components/companias/administrar/Administrar";

export default function useCompanias() {
  /** Estados **/
  const [vista, establecerVista] = useState(0);

  /** Submenu de la vista **/
  const OpcionesSubMenu = [
    {
      Icono: PlusCircleIcon,
      Texto: "Registrar",
      Seleccionado: vista === 0,
      onOpcion: () => {
        establecerVista(0);
      },
    },
    {
      Icono: GearSixIcon,
      Texto: "Administrar",
      Seleccionado: vista === 1,
      onOpcion: () => {
        establecerVista(1);
      },
    },
  ];

  /** Componentes de la vista **/
  const ListaComponentes = {
    0: Registrar,
    1: Administrar,
  };
  const ComponenteRenderizar = ListaComponentes[vista];

  return {
    PropsVista: {
      vista,
      OpcionesSubMenu,
      ComponenteRenderizar,
    },
  };
}
