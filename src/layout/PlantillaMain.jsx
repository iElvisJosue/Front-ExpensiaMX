/** Componentes **/
import BotonMenuFlotante from "../components/global/BotonMenuFlotante";
import MenuPrincipal from "../components/global/MenuPrincipal";
/** Estilos **/
import "../styles/layout/PlantillaMain.css";

export default function PlantillaMain({ children }) {
  return (
    <main className="PlantillaMain">
      <BotonMenuFlotante />
      <MenuPrincipal />
      <section className="PlantillaMain__Contenido">{children}</section>
    </main>
  );
}
