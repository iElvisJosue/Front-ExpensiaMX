/** Contextos **/
import { useSistema } from "@/context/SistemaContext";
/** Componentes **/
import MenuSuperAdmin from "@/components/menus/MenuSuperAdmin";
import BotonMenuFlotante from "@/components/global/BotonMenuFlotante";
import ModalActualizacion from "@/components/modals/ModalActualizacion";
/** Estilos **/
import "../styles/layout/PlantillaSuperAdmin.css";

export default function PlantillaSuperAdmin({ children }) {
  /** Desectructuramos las props **/
  const {
    PropsActualizacion: { verModalNuevaVersion, versionSistemaWeb },
  } = useSistema();

  return (
    <main className="PlantillaSuperAdmin">
      {verModalNuevaVersion && (
        <ModalActualizacion Version={versionSistemaWeb} />
      )}
      {/* <BotonMenuFlotante /> */}
      <MenuSuperAdmin />
      {children}
    </main>
  );
}
