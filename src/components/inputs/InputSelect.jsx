/** Librerias **/
import Select from "react-select";
/** Estilos **/
const Estilos = {
  container: (base) => ({
    ...base,
    width: "100%",
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: "var(--Texto14)",
    color: "var(--ColorGrisOscuro)",
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: "var(--Texto14)",
    color: "var(--ColorGrisOscuro)",
  }),
  control: (base) => ({
    ...base,
    width: "100%",
    height: "50px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "var(--ColorGrisClaro)",
    boxShadow: "none",
    cursor: "pointer",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "var(--ColorBlanco)",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "var(--ColorGrisClaro)" : "white",
    fontSize: "var(--Texto14)",
    color: "var(--ColorGrisOscuro)",
    cursor: "pointer",
  }),
};
/** Estilos **/
import "../../styles/components/inputs/InputSelect.css";

export default function InputSelect({ Label, Opciones, Value, onChange, Cargando }) {
  const TextoPlaceholder = Cargando
    ? "Cargando..."
    : Opciones.length === 0
      ? "Sin opciones disponibles"
      : "Selecciona una opción";

  return (
    <div className="InputSelect">
      <p className="InputSelect__Titulo">{Label}</p>
      <Select
        options={Opciones}
        value={Value}
        isSearchable={true}
        name="color"
        placeholder={TextoPlaceholder}
        noOptionsMessage={() => "Sin resultados"}
        isLoading={Cargando}
        isDisabled={Cargando || Opciones.length === 0}
        styles={Estilos}
        onChange={onChange}
      />
    </div>
  );
}
