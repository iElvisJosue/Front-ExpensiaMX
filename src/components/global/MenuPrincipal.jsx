/** Librerias **/
import { NavLink } from "react-router-dom";
/** Iconos **/
import {
  BookOpenUserIcon,
  BuildingOfficeIcon,
  CaretLeftIcon,
  CaretRightIcon,
  FoldersIcon,
  GearIcon,
  HouseSimpleIcon,
  ShoppingCartSimpleIcon,
  SignOutIcon,
} from "@phosphor-icons/react";
/** Contextos **/
import { useSistema } from "@/context/SistemaContext";
/** Ayudas **/
import {
  NOMBRE_SISTEMA,
  TOKEN_DE_ACCESO_SISTEMA,
} from "@/helpers/MagicStrings";
import { MuyChico, Normal } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/global/MenuPrincipal.css";

export default function MenuPrincipal() {
  const {
    PropsMenu: { verMenuCompleto, establecerVerMenuCompleto },
  } = useSistema();
  /** Función para cerrar la sesión **/
  const CerrarSesion = () => {
    window.location.href = "/";
    localStorage.removeItem(TOKEN_DE_ACCESO_SISTEMA);
  };
  const ClaseMenu = verMenuCompleto
    ? "MenuPrincipal Completo"
    : "MenuPrincipal";

  return (
    <aside className={ClaseMenu}>
      {/* Botón de visualización del menú */}
      <button
        className="MenuPrincipal__Visualizacion"
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
      <div className="MenuPrincipal__Logo">
        <img
          src="images/Logo.png"
          alt="Logo Sistema"
          className="MenuPrincipal__Logo--Imagen"
        />
        <p className="MenuPrincipal__Logo--Titulo">{NOMBRE_SISTEMA}</p>
      </div>
      {/* Opciones del menú */}
      <div className="MenuPrincipal__Opciones">
        {/* Inicio */}
        <NavLink
          to="/Inicio"
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuPrincipal__Opciones--Opcion">
            <span className="MenuPrincipal__Opciones--Opcion--Icono">
              <HouseSimpleIcon {...Normal} />
            </span>
            <p className="MenuPrincipal__Opciones--Opcion--Texto">Inicio</p>
          </div>
        </NavLink>
        {/* Contratos */}
        <NavLink
          to="/Contratos"
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuPrincipal__Opciones--Opcion">
            <span className="MenuPrincipal__Opciones--Opcion--Icono">
              <FoldersIcon {...Normal} />
            </span>
            <p className="MenuPrincipal__Opciones--Opcion--Texto">Contratos</p>
          </div>
        </NavLink>
        {/* Proveedores */}
        <NavLink
          to="/Proveedores"
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuPrincipal__Opciones--Opcion">
            <span className="MenuPrincipal__Opciones--Opcion--Icono">
              <BuildingOfficeIcon {...Normal} />
            </span>
            <p className="MenuPrincipal__Opciones--Opcion--Texto">
              Proveedores
            </p>
          </div>
        </NavLink>
        {/* Compras */}
        <NavLink
          to="/Compras"
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuPrincipal__Opciones--Opcion">
            <span className="MenuPrincipal__Opciones--Opcion--Icono">
              <ShoppingCartSimpleIcon {...Normal} />
            </span>
            <p className="MenuPrincipal__Opciones--Opcion--Texto">Compras</p>
          </div>
        </NavLink>
        {/* Catálogo */}
        <NavLink
          to="/Catalogos"
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuPrincipal__Opciones--Opcion">
            <span className="MenuPrincipal__Opciones--Opcion--Icono">
              <BookOpenUserIcon {...Normal} />
            </span>
            <p className="MenuPrincipal__Opciones--Opcion--Texto">Catálogos</p>
          </div>
        </NavLink>
        {/* Configuración */}
        <NavLink
          to="/Configuracion"
          className={({ isActive }) => (isActive ? "LinkActivo" : "Link")}
        >
          <div className="MenuPrincipal__Opciones--Opcion">
            <span className="MenuPrincipal__Opciones--Opcion--Icono">
              <GearIcon {...Normal} />
            </span>
            <p className="MenuPrincipal__Opciones--Opcion--Texto">
              Configuración
            </p>
          </div>
        </NavLink>
      </div>
      {/* Botón de cerrar sesión y tema */}
      <div className="MenuPrincipal__Footer">
        <button
          className="MenuPrincipal__Footer--CerrarSesion"
          onClick={CerrarSesion}
        >
          <SignOutIcon {...Normal} />
          Salir
        </button>
      </div>
    </aside>
  );
}
