/** Iconos **/
import { MagnifyingGlassIcon, WrenchIcon } from "@phosphor-icons/react";
/** Ayudas **/
import { Chico } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/global/ListaDeOpciones.css";

export default function ListaDeOpciones({ Botones = [] }) {
  return (
    <div className="ListaDeOpciones">
      <div className="ListaDeOpciones__Buscador" id="BuscadorGeneral">
        <span className="ListaDeOpciones__Buscador--Icono">
          <MagnifyingGlassIcon {...Chico} />
        </span>
        <span className="ListaDeOpciones__Buscador--Linea"></span>
        <input
          type="text"
          className="ListaDeOpciones__Buscador--Input"
          placeholder="Buscar..."
          name="Busqueda"
          // value={valorDelInput}
          // onChange={manejarValorDelInput}
        />
      </div>
      <div className="ListaDeOpciones__Botones">
        {Botones.map((boton, index) => (
          <BotonOpcion key={index} Detalles={boton} index={index} />
        ))}
      </div>
    </div>
  );
}
function BotonOpcion({ Detalles, index }) {
  /**  Desestructamos las props **/
  const { onBoton = () => {}, ColorBg, Icono, Texto } = Detalles;
  /** Estilos y valores por defecto **/
  const ClaseBoton = ColorBg
    ? `ListaDeOpciones__Botones--Boton ${ColorBg}`
    : "ListaDeOpciones__Botones--Boton";
  const IconoBoton = Icono ?? WrenchIcon;

  return (
    <button className={ClaseBoton} onClick={onBoton} key={index}>
      <IconoBoton {...Chico} weight="regular" />
      {Texto}
    </button>
  );
}
