/** Ayudas **/
import { RUTAS_IMAGENES } from "@/helpers/Rutas";
/** Estilos **/
import "../../styles/components/modals/ModalActualizacion.css";

export default function ModalActualizacion({ Version }) {
  /** Destructuramos las props **/
  const { version, notas } = Version;
  const RecargarNavegador = () => {
    /** Para evitar problemas con el cache **/
    localStorage.removeItem("WEB_EXPENSIAMX_VERSION");
    localStorage.setItem("WEB_EXPENSIAMX_VERSION", version);
    window.location.reload();
  };

  return (
    <div className="ModalActualizacion">
      <div className="ModalActualizacion__Contenido">
        <picture className="ModalActualizacion__Contenido--Imagen">
          <img src={RUTAS_IMAGENES.Nueva_Actualizacion} alt="Logo Actualización" />
        </picture>
        <p className="ModalActualizacion__Contenido--Titulo">
          ¡Actualización disponible!
        </p>
        <small className="ModalActualizacion__Contenido--Version">
          【 Notas de la versión {version} 】
        </small>
        <p className="ModalActualizacion__Contenido--Notas">{notas}</p>
        <button
          className="ModalActualizacion__Contenido--Boton"
          onClick={RecargarNavegador}
          type="button"
        >
          RECARGAR AHORA
        </button>
      </div>
    </div>
  );
}
