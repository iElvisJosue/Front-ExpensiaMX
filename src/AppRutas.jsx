/** Vistas **/
import IniciarSesion from "./views/IniciarSesion";
import Inicio from "./views/Inicio";
import Contratos from "./views/Contratos";
import Catalogos from "./views/Catalogos";
import Compras from "./views/Compras";
import Proveedores from "./views/Proveedores";
import Configuracion from "./views/Configuracion";

export const RutasPublicas = [
  {
    path: "/",
    element: <IniciarSesion />,
  },
];
export const RutasParaAdministradores = [
  {
    path: "/Inicio",
    element: <Inicio />,
  },
  {
    path: "/Contratos",
    element: <Contratos />,
  },
  {
    path: "/Catalogos",
    element: <Catalogos />,
  },
  {
    path: "/Compras",
    element: <Compras />,
  },
  {
    path: "/Proveedores",
    element: <Proveedores />,
  },
  {
    path: "/Configuracion",
    element: <Configuracion />,
  },
];
