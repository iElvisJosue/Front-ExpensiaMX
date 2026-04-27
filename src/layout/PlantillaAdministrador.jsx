/** Contextos **/
import { useSistema } from "@/context/SistemaContext";
/** Componentes **/
import MenuAdministrador from "@/components/menus/MenuAdministrador";
import BotonMenuFlotante from "@/components/global/BotonMenuFlotante";
import ModalActualizacion from "@/components/modals/ModalActualizacion";
/** Estilos **/
import "../styles/layout/PlantillaAdministrador.css";

export default function PlantillaAdministrador({ children }) {
  /** Desectructuramos las props **/
  const {
    PropsActualizacion: { verModalNuevaVersion, versionSistemaWeb },
  } = useSistema();

  return (
    <main className="PlantillaAdministrador">
      {verModalNuevaVersion && (
        <ModalActualizacion Version={versionSistemaWeb} />
      )}
      {/* <BotonMenuFlotante /> */}
      <MenuAdministrador />
      <section className="PlantillaAdministrador__Contenido">{children}</section>
    </main>
  );
}
