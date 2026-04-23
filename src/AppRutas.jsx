/** Vistas **/
import IniciarSesion from "./views/IniciarSesion";
import Inicio from "./views/Inicio";
import Companias from "./views/Companias";
import Usuarios from "./views/Usuarios";
import Gastos from "./views/Gastos";
import Comprobantes from "./views/Comprobantes";
import Proyectos from "./views/Proyectos";
import Categorias from "./views/Categorias";
import Reportes from "./views/Reportes";
import Suscripciones from "./views/Suscripciones";
import Facturacion from "./views/Facturacion";
import Auditoria from "./views/Auditoria";

export const RutasPublicas = [
  {
    path: "/",
    element: <IniciarSesion />,
  },
];
export const RutasSuperAdmins = [
  {
    path: "inicio",
    element: <Inicio />,
  },
  {
    path: "usuarios",
    element: <Usuarios />,
  },
  {
    path: "gastos",
    element: <Gastos />,
  },
  {
    path: "companias",
    element: <Companias />,
  },
  {
    path: "comprobantes",
    element: <Comprobantes />,
  },
  {
    path: "proyectos",
    element: <Proyectos />,
  },
  {
    path: "categorias",
    element: <Categorias />,
  },
  {
    path: "reportes",
    element: <Reportes />,
  },
  {
    path: "suscripciones",
    element: <Suscripciones />,
  },
  {
    path: "facturacion",
    element: <Facturacion />,
  },
  {
    path: "auditoria",
    element: <Auditoria />,
  },
];
export const RutasAdministradores = [
  {
    path: "inicio",
    element: <Inicio />,
  },
  {
    path: "usuarios",
    element: <Usuarios />,
  },
  {
    path: "gastos",
    element: <Gastos />,
  },
  {
    path: "comprobantes",
    element: <Comprobantes />,
  },
  {
    path: "proyectos",
    element: <Proyectos />,
  },
  {
    path: "categorias",
    element: <Categorias />,
  },
  {
    path: "reportes",
    element: <Reportes />,
  },
  {
    path: "facturacion",
    element: <Facturacion />,
  },
  {
    path: "auditoria",
    element: <Auditoria />,
  },
];
