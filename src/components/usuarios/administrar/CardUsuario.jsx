/** Iconos **/
import {
  EyeIcon,
  PencilSimpleLineIcon,
  DotsThreeOutlineVerticalIcon,
} from "@phosphor-icons/react";
/** Hooks **/
import useActualizarEstadoUsuario from "@/hooks/usuarios/administrar/useActualizarEstadoUsuario";
/** Ayudas **/
import { BACK_IMG_COMPANIAS } from "@/helpers/Urls";
import { ROLES_USUARIO } from "@/helpers/MagicStrings";
import { RUTAS_IMAGENES } from "@/helpers/RutasImagenes";
/** Estilos **/
import "../../../styles/components/usuarios/administrar/CardUsuario.css";

export default function CardUsuario({
  Usuario,
  onEditar,
  onActualizarEstadoLocal,
}) {
  /** Desestructuramos las props del hook **/
  const {
    PropsVista: { verListaOpciones, establecerVerListaOpciones },
    PropsPeticiones: { ActivarDesactivarUsuario },
  } = useActualizarEstadoUsuario();

  /** Desestructuramos la información del usuario **/
  const {
    id_usuario,
    nombre_usuario,
    correo_usuario,
    activo_usuario,
    nombre_rol,
    codigo_rol,
    id_compania,
    logo_compania,
    nombre_compania,
  } = Usuario;

  /** Evitamos trabajar con 0/1 **/
  const esta_activo = Boolean(activo_usuario);

  /** Ruta del logo de la empresa **/
  const ruta_logo = `${BACK_IMG_COMPANIAS}/${logo_compania}`;

  /** Clases **/
  const ClaseCard = esta_activo
    ? "CardUsuario Activo"
    : "CardUsuario Desactivado";
  const ClaseListaDeOpciones = verListaOpciones
    ? "CardUsuario__Opciones--Lista Mostrar"
    : "CardUsuario__Opciones--Lista";

  return (
    <div className={ClaseCard}>
      <div className="CardUsuario__Opciones">
        {/* Los SUPER ADMIN no pueden ser administrados */}
        {codigo_rol !== ROLES_USUARIO.SUPER_ADMIN && (
          <>
            <button
              type="button"
              className="CardUsuario__Opciones--ActivarDesactivar"
              onClick={async () => {
                const res = await ActivarDesactivarUsuario({
                  id_usuario,
                  id_compania,
                  activo_usuario: !esta_activo,
                });
                if (res.exito) onActualizarEstadoLocal();
              }}
            />
            <button
              className="CardUsuario__Opciones--Ver"
              type="button"
              onClick={() => establecerVerListaOpciones(!verListaOpciones)}
            >
              <DotsThreeOutlineVerticalIcon size={16} weight="fill" />
            </button>
          </>
        )}
        <ul className={ClaseListaDeOpciones}>
          <li className="CardUsuario__Opciones--Lista--Item">
            <EyeIcon size={18} weight="fill" />
            Ver
          </li>
          {esta_activo && (
            <li
              className="CardUsuario__Opciones--Lista--Item"
              onClick={onEditar}
            >
              <PencilSimpleLineIcon size={18} weight="fill" />
              Actualizar
            </li>
          )}
        </ul>
      </div>
      <picture className="CardUsuario__Logo">
        <img
          src={ruta_logo || RUTAS_IMAGENES.Sin_Logo_Compania}
          onError={(e) => {
            e.target.src = RUTAS_IMAGENES.Sin_Logo_Compania;
          }}
          alt="Foto compañia"
        />
      </picture>
      <span className="CardUsuario__Personal">
        <b>{nombre_usuario}</b>
        <p>{nombre_rol}</p>
        <small>{correo_usuario}</small>
      </span>
      <p className="CardUsuario__Empresa">
        {nombre_compania || "Sin compañia"}
      </p>
    </div>
  );
}
