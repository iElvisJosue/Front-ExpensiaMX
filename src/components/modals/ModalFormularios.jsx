/** Iconos **/
import { CursorClickIcon, XIcon } from "@phosphor-icons/react";
/** Componentes **/
import Cargando from "@/components/global/Cargando";
/** Estilos **/
import "../../styles/components/modals/ModalFormularios.css";

export default function ModalFormularios({
  onForm = () => {},
  onCerrar = () => {},
  Boton = {
    Icono: CursorClickIcon,
    Texto: "Guardar",
  },
  RealizandoPeticion,
  children,
}) {
  /** Desestructamos las props **/
  const { Icono, Texto } = Boton;

  return (
    <div className="ModalFormularios">
      <form className="ModalFormularios__Formulario" onSubmit={onForm}>
        {RealizandoPeticion ? (
          <Cargando Clase="Transparente" Texto="Realizando petición.." />
        ) : (
          <>
            <span className="ModalFormularios__Contenido--Encabezado">
              <button type="button" onClick={onCerrar}>
                <XIcon size={20} weight="bold" />
              </button>
            </span>
            <section className="ModalFormularios__Formulario__Contenido">
              {children}
            </section>
            <button
              className="ModalFormularios__Contenido--Boton"
              type="submit"
            >
              <Icono size={20} weight="regular" />
              {Texto}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
