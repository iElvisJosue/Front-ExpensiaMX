/** Iconos **/
import { ListIcon } from "@phosphor-icons/react";
/** Contextos **/
import { useSistemaContext} from "@/context/SistemaContext";
/** Ayudas **/
import { Normal } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/global/BotonMenuFlotante.css";

export default function BotonMenuFlotante() {
  const {
    PropsMenu: { verMenuCompleto, establecerVerMenuCompleto },
  } = useSistemaContext();
  return (
    <button
      className="BotonMenuFlotante"
      onClick={() => establecerVerMenuCompleto(!verMenuCompleto)}
    >
      <ListIcon {...Normal} />
    </button>
  );
}
