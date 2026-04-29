/** Iconos **/
import { FolderIcon } from "@phosphor-icons/react";
/** Ayudas **/
import { MuyGrande } from "@/helpers/TamanoIcono";
import { RUTAS_IMAGENES } from "@/helpers/RutasImagenes";
/** Estilos **/
import "../../styles/components/global/Encabezado.css";

export default function Encabezado({ Icono, Seccion = "Sección" }) {
  const IconoSeccion = Icono || FolderIcon;

  return (
    <header className="Encabezado">
      <div className="Encabezado__Seccion">
        <IconoSeccion {...MuyGrande} />
        <p>{Seccion}</p>
      </div>
      <picture className="Encabezado__Usuario">
        <img src={RUTAS_IMAGENES.Logo} alt="Logo Compañia" />
      </picture>
    </header>
  );
}
