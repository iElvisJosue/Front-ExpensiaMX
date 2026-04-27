/** Librerías **/
import { useNavigate } from "react-router-dom";
/** Ayudas **/
import { RUTAS_IMAGENES } from "@/helpers/RutasImagenes";
/** Estilos **/
import "../styles/views/NoExistente.css";

export default function NoExistente() {
  const navigate = useNavigate();

  const IrAtras = () => {
    navigate(-1);
  };

  return (
    <main className="NoExistente">
      <img src={RUTAS_IMAGENES.Ruta_Inexistente} alt="Pagina no encontrada" />
      <h1>Página no encontrada</h1>
      <p>La ruta a la que intentaste acceder no existe.</p>
      <button onClick={IrAtras}>Regresar</button>
    </main>
  );
}
