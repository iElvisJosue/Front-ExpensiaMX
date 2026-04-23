/** Librerias **/
import { ErrorMessage } from "@hookform/error-message";
/** Iconos **/
import { TextboxIcon } from "@phosphor-icons/react";
/** Ayudas **/
import { Normal } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/global/InputText.css";

export default function InputText({
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
  const IconoInputIzquierda = IconoIzquierda ? IconoIzquierda : TextboxIcon;
  /** Clase para el tamaño del grid (Uno-Dos-Tres...) **/
  const ClaseInput = Columnas ? `InputText ${Columnas}` : `InputText`;

  return (
    <div className={ClaseInput}>
      <div className="InputText__Contenido">
        <span className="InputText__Contenido--Icono Izquierda">
          {<IconoInputIzquierda {...Normal} />}
        </span>
        {IconoDerecha && (
          <span className="InputText__Contenido--Icono Derecha" onClick={onDerecha}>
            {<IconoDerecha {...Normal} />}
          </span>
        )}
        <input
          id={NombreCampo}
          name={NombreCampo}
          type={TipoCampo}
          placeholder=" "
          className="InputText__Contenido--Input"
          {...register}
        />
        <label htmlFor="CorreoUsuario" className="InputText__Contenido--Label">
          {Label}
        </label>
      </div>
      <ErrorMessage
        errors={errors}
        name={NombreCampo}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <small key={type} className="InputText__MensajeDeError">
              {message}
            </small>
          ))
        }
      />
    </div>
  );
}
