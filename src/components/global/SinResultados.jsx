/** Ayudas **/
import { RUTAS_IMAGENES } from "@/helpers/RutasImagenes";
/** Estilos **/
import "../../styles/components/global/SinResultados.css";

export default function SinResultados({
  Imagen = RUTAS_IMAGENES.Sin_Resultados,
  Texto = "¡No se encontraron resultados!",
}) {
  return (
    <section className="SinResultados">
      <img
        src={Imagen}
        alt="No se encontraron resultados"
        className="SinResultados__Imagen"
      />
      <p className="SinResultados__Texto">{Texto}</p>
    </section>
  );
}
