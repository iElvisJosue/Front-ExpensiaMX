/** Iconos **/
import { ListMagnifyingGlassIcon } from "@phosphor-icons/react";
/** Ayudas **/
import { Chico } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/global/TextoResultados.css";

export default function TextoResultados({ Cantidad }) {
  const TextoCantidad = Cantidad > 1 ? "resultados" : "resultado";

  return (
    <span className="TextoResultados">
      <ListMagnifyingGlassIcon {...Chico} />
      <p>
        Mostrando {Cantidad} {TextoCantidad}
      </p>
    </span>
  );
}
