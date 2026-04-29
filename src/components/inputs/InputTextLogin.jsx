/** Librerias **/
import { ErrorMessage } from "@hookform/error-message";
/** Iconos **/
import { TextboxIcon } from "@phosphor-icons/react";
/** Ayudas **/
import { Normal } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/inputs/InputTextLogin.css";

export default function InputTextLogin({
  Columnas = "",
  Label = "Label",
  IconoIzquierda = null,
  /** Props para el campo de contrasena **/
  IconoDerecha = null,
  onDerecha = () => {},
  NombreCampo,
  TipoCampo = "text",
  register = {},
  errors = {},
}) {
  const IconoInputIzquierda = IconoIzquierda ?? TextboxIcon;
  /** Clase para el tamaño del grid (Uno-Dos-Tres...) **/
  const ClaseInput = Columnas ? `InputTextLogin ${Columnas}` : `InputTextLogin`;

  return (
    <div className={ClaseInput}>
      <div className="InputTextLogin__Contenido">
        <span className="InputTextLogin__Contenido--Icono Izquierda">
          {<IconoInputIzquierda {...Normal} />}
        </span>
        {IconoDerecha && (
          <span className="InputTextLogin__Contenido--Icono Derecha" onClick={onDerecha}>
            {<IconoDerecha {...Normal} />}
          </span>
        )}
        <input
          id={NombreCampo}
          name={NombreCampo}
          type={TipoCampo}
          placeholder=" "
          className="InputTextLogin__Contenido--Input"
          {...register}
        />
        <label htmlFor={NombreCampo} className="InputTextLogin__Contenido--Label">
          {Label}
        </label>
      </div>
      <ErrorMessage
        errors={errors}
        name={NombreCampo}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <small key={type} className="InputTextLogin__MensajeDeError">
              {message}
            </small>
          ))
        }
      />
    </div>
  );
}
