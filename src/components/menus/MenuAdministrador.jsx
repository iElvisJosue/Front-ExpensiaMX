/** Librerias **/
import { NavLink } from "react-router-dom";
/** Iconos **/
import {
  CaretLeftIcon,
  CaretRightIcon,
  ChartBarIcon,
  ClipboardTextIcon,
  CurrencyCircleDollarIcon,
  FoldersIcon,
  HouseSimpleIcon,
  InvoiceIcon,
  ReceiptIcon,
  SignOutIcon,
  TagIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
/** Contextos **/
import { useSistema } from "@/context/SistemaContext";
/** Hooks **/
import useCerrarSesion from "@/hooks/menu/useCerrarSesion";
/** Ayudas **/
import { NOMBRE_SISTEMA } from "@/helpers/MagicStrings";
import { RUTAS_IMAGENES } from "@/helpers/RutasImagenes";
import { MuyChico, Normal } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/menus/MenuAdministrador.css";

export default function MenuAdministrador() {
  /** Peticiones **/
  const { FinalizarSesion } = useCerrarSesion();
  /** Desestructuramos las props **/
  const {
    PropsMenu: { verMenuCompleto, establecerVerMenuCompleto },
    PropsUsuario: {
      datosUsuario: { url_compania },
    },
  } = useSistema();

  const ClaseMenu = verMenuCompleto
    ? "MenuAdministrador Completo"
    : "MenuAdministrador";

  return (
    <aside className={ClaseMenu}>
      {/* Botón de visualización del menú */}
      <button
        className="MenuAdministrador__Visualizacion"
        onClick={() => establecerVerMenuCompleto(!verMenuCompleto)}
        title={verMenuCompleto ? "Ocultar menú" : "Mostrar menú"}
      >
        {verMenuCompleto ? (
          <CaretLeftIcon {...MuyChico} weight="bold" />
        ) : (
          <CaretRightIcon {...MuyChico} weight="bold" />
        )}
      </button>
      {/* Logo y nombre del sistema */}
      <div className="MenuAdministrador__Logo">
        <img
          src={RUTAS_IMAGENES.Logo}
          alt="Logo Sistema"
          className="MenuAdministrador__Logo--Imagen"
        />
        <p className="MenuAdministrador__Logo--Titulo">{NOMBRE_SISTEMA}</p>
      </div>
      {/* Opciones del menú */}
      <div className="MenuAdministrador__Opciones">
        {/* Inicio */}
        <NavLink
          to={`/${url_compania}/inicio`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <HouseSimpleIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">Inicio</p>
          </div>
        </NavLink>
        {/* Usuarios */}
        <NavLink
          to={`/${url_compania}/usuarios`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <UsersThreeIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">
              Usuarios
            </p>
          </div>
        </NavLink>
        {/* Gastos */}
        <NavLink
          to={`/${url_compania}/gastos`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <CurrencyCircleDollarIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">Gastos</p>
          </div>
        </NavLink>
        {/* Comprobantes */}
        <NavLink
          to={`/${url_compania}/comprobantes`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <ReceiptIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">
              Comprobantes
            </p>
          </div>
        </NavLink>
        {/* Proyectos */}
        <NavLink
          to={`/${url_compania}/proyectos`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <FoldersIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">
              Proyectos
            </p>
          </div>
        </NavLink>
        {/* Categorias */}
        <NavLink
          to={`/${url_compania}/categorias`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <TagIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">
              Categorías
            </p>
          </div>
        </NavLink>
        {/* Reportes */}
        <NavLink
          to={`/${url_compania}/reportes`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <ChartBarIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">
              Reportes
            </p>
          </div>
        </NavLink>
        {/* Facturacion */}
        <NavLink
          to={`/${url_compania}/facturacion`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <InvoiceIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">
              Facturación
            </p>
          </div>
        </NavLink>
        {/* Auditoria */}
        <NavLink
          to={`/${url_compania}/auditoria`}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuAdministrador__Opciones--Opcion">
            <span className="MenuAdministrador__Opciones--Opcion--Icono">
              <ClipboardTextIcon {...Normal} />
            </span>
            <p className="MenuAdministrador__Opciones--Opcion--Texto">
              Auditoría
            </p>
          </div>
        </NavLink>
      </div>
      {/* Botón de cerrar sesión y tema */}
      <div className="MenuAdministrador__Footer">
        <button
          className="MenuAdministrador__Footer--CerrarSesion"
          onClick={FinalizarSesion}
        >
          <SignOutIcon {...Normal} />
          Salir
        </button>
      </div>
    </aside>
  );
}
