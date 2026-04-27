/** Librerias **/
import { ErrorMessage } from "@hookform/error-message";
/** Iconos **/
import { EyeIcon, PasswordIcon, TextboxIcon } from "@phosphor-icons/react";
/** Ayudas **/
import { Chico } from "@/helpers/TamanoIcono";
/** Estilos **/
import "../../styles/components/inputs/InputPassword.css";

export default function InputPassword({
  Columnas,
  Label = "Label",
  Placeholder = "Escriba aquí...",
  NombreCampo,
  TipoCampo = "password",
  IconoDerecha,
  onDerecha = () => {},
  register = {},
  errors = {},
}) {
  const IconoDerechaInput = IconoDerecha ?? EyeIcon;
  /** Clase para el tamaño del grid (Uno-Dos-Tres...) **/
  const ClaseInput = Columnas ? `InputPassword ${Columnas}` : `InputPassword`;

  return (
    <div className={ClaseInput}>
      <p className="InputPassword__Titulo">{Label}</p>
      <div className="InputPassword__Input">
        <div className="InputPassword__Input--Icono">
          <PasswordIcon {...Chico} />
        </div>
        <input
          id={NombreCampo}
          name={NombreCampo}
          className="InputPassword__Input--Pass"
          placeholder={Placeholder}
          type={TipoCampo}
          {...register}
        />
        <div
          className="InputPassword__Input--Icono Derecha"
          onClick={onDerecha}
        >
          <IconoDerechaInput {...Chico} />
        </div>
      </div>
      <ErrorMessage
        errors={errors}
        name={NombreCampo}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <small key={type} className="InputPassword__Validacion">
              {message}
            </small>
          ))
        }
      />
    </div>
  );
}
