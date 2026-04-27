/** Librerias **/
import { ErrorMessage } from "@hookform/error-message";
/** Iconos **/
import { TextboxIcon } from "@phosphor-icons/react";
/** Ayudas **/
import { Chico } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/inputs/InputText.css";

export default function InputText({
  Columnas = null,
  Label = "Label",
  Icono,
  Placeholder = "Escriba aquí...",
  NombreCampo,
  register = {},
  errors = {},
}) {
  const IconoInput = Icono ?? TextboxIcon;
  /** Clase para el tamaño del grid (Uno-Dos-Tres...) **/
  const ClaseInput = Columnas ? `InputText ${Columnas}` : `InputText`;

  return (
    <div className={ClaseInput}>
      <p className="InputText__Titulo">{Label}</p>
      <div className="InputText__Input">
        <div className="InputText__Input--Icono">
          <IconoInput {...Chico} />
        </div>
        <input
          id={NombreCampo}
          name={NombreCampo}
          className="InputText__Input--Text"
          placeholder={Placeholder}
          type="text"
          {...register}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={NombreCampo}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <small key={type} className="InputText__Validacion">
              {message}
            </small>
          ))
        }
      />
    </div>
  );
}
