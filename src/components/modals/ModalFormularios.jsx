/** Iconos **/
import { XIcon } from "@phosphor-icons/react";
/** Estilos **/
import "../../styles/components/modals/ModalFormularios.css";

export default function ModalFormularios({ onCerrar = () => {}, children }) {
  return (
    <div className="ModalFormularios">
      <div className="ModalFormularios__Contenedor">
        <span className="ModalFormularios__Contenedor--Encabezado">
          <button type="button" onClick={onCerrar}>
            <XIcon size={20} weight="bold" />
          </button>
        </span>
        {children}
      </div>
    </div>
  );
}
