/** Ayudas **/
import { RUTAS_IMAGENES } from "@/helpers/RutasImagenes";
/** Estilos **/
import "../../styles/components/global/RealizandoPeticion.css";

export default function RealizandoPeticion() {
  return (
    <section className="RealizandoPeticion">
      <picture className="RealizandoPeticion__Imagen">
        <img src={RUTAS_IMAGENES.Logo} alt="Logo Sistema" />
      </picture>
      <div className="RealizandoPeticion__Barra" />
      <p className="RealizandoPeticion__Texto">Realizando petición...</p>
    </section>
  );
}
