/** Librerias **/
import { NavLink } from "react-router-dom";
/** Iconos **/
import {
  ArrowsClockwiseIcon,
  BuildingOfficeIcon,
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
import "../../styles/components/menus/MenuSuperAdmin.css";

export default function MenuSuperAdmin() {
  /** Peticiones **/
  const { FinalizarSesion } = useCerrarSesion();
  /** Desestructuramos las props **/
  const {
    PropsMenu: { verMenuCompleto, establecerVerMenuCompleto },
  } = useSistema();

  const ClaseMenu = verMenuCompleto
    ? "MenuSuperAdmin Completo"
    : "MenuSuperAdmin";

  return (
    <aside className={ClaseMenu}>
      {/* Botón de visualización del menú */}
      <button
        className="MenuSuperAdmin__Visualizacion"
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
      <div className="MenuSuperAdmin__Logo">
        <img
          src={RUTAS_IMAGENES.Logo}
          alt="Logo Sistema"
          className="MenuSuperAdmin__Logo--Imagen"
        />
        <p className="MenuSuperAdmin__Logo--Titulo">{NOMBRE_SISTEMA}</p>
      </div>
      {/* Opciones del menú */}
      <div className="MenuSuperAdmin__Opciones">
        {/* Inicio */}
        <NavLink
          to={"/super-admin/inicio"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <HouseSimpleIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">Inicio</p>
          </div>
        </NavLink>
        {/* Companias */}
        <NavLink
          to={"/super-admin/companias"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <BuildingOfficeIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">Compañias</p>
          </div>
        </NavLink>
        {/* Usuarios */}
        <NavLink
          to={"/super-admin/usuarios"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <UsersThreeIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">Usuarios</p>
          </div>
        </NavLink>
        {/* Gastos */}
        <NavLink
          to={"/super-admin/gastos"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <CurrencyCircleDollarIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">Gastos</p>
          </div>
        </NavLink>
        {/* Comprobantes */}
        <NavLink
          to={"/super-admin/comprobantes"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <ReceiptIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">
              Comprobantes
            </p>
          </div>
        </NavLink>
        {/* Proyectos */}
        <NavLink
          to={"/super-admin/proyectos"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <FoldersIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">Proyectos</p>
          </div>
        </NavLink>
        {/* Categorias */}
        <NavLink
          to={"/super-admin/categorias"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <TagIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">
              Categorías
            </p>
          </div>
        </NavLink>
        {/* Reportes */}
        <NavLink
          to={"/super-admin/reportes"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <ChartBarIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">Reportes</p>
          </div>
        </NavLink>
        {/* Suscripciones */}
        <NavLink
          to={"/super-admin/suscripciones"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <ArrowsClockwiseIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">
              Suscripciones
            </p>
          </div>
        </NavLink>
        {/* Facturacion */}
        <NavLink
          to={"/super-admin/facturacion"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <InvoiceIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">
              Facturación
            </p>
          </div>
        </NavLink>
        {/* Auditoria */}
        <NavLink
          to={"/super-admin/auditoria"}
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuSuperAdmin__Opciones--Opcion">
            <span className="MenuSuperAdmin__Opciones--Opcion--Icono">
              <ClipboardTextIcon {...Normal} />
            </span>
            <p className="MenuSuperAdmin__Opciones--Opcion--Texto">Auditoría</p>
          </div>
        </NavLink>
      </div>
      {/* Botón de cerrar sesión y tema */}
      <div className="MenuSuperAdmin__Footer">
        <button
          className="MenuSuperAdmin__Footer--CerrarSesion"
          onClick={FinalizarSesion}
        >
          <SignOutIcon {...Normal} />
          Salir
        </button>
      </div>
    </aside>
  );
}
