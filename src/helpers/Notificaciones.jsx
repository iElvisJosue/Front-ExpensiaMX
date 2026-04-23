/** Librerías **/
import { sileo } from "sileo";
/** Iconos **/
import { ChecksIcon, WarningIcon, XIcon } from "@phosphor-icons/react";
/** Ayudas **/
import { MuyChico } from "@/helpers/TamanoIcono";
/** Codigos de respuesta **/
const CodigosExito = [200, 201];
const CodigosWarning = [400, 401, 403, 404, 409];
const CodigosError = [500];

export const NotificacionesRespuesta = ({ Codigo, Mensaje }) => {
  if (CodigosExito.includes(Codigo)) {
    return sileo.success({
      icon: <ChecksIcon {...MuyChico} weight="bold" />,
      fill: "#166534",
      title: "¡Exito!",
      description: (
        <p
          style={{
            color: "#ECFDF5",
          }}
        >
          {Mensaje}
        </p>
      ),
      styles: {
        title: "TituloSileo Verde",
        badge: "IconoSileo Verde",
      },
    });
  }
  if (CodigosWarning.includes(Codigo)) {
    return sileo.warning({
      icon: <WarningIcon {...MuyChico} weight="bold" />,
      fill: "#92400E",
      title: "¡Atención!",
      description: (
        <p
          style={{
            color: "#FFFBEB",
          }}
        >
          {Mensaje}
        </p>
      ),
      styles: {
        title: "TituloSileo Naranja",
        badge: "IconoSileo Naranja",
      },
    });
  }
  if (CodigosError.includes(Codigo)) {
    return sileo.error({
      icon: <XIcon {...MuyChico} weight="bold" />,
      fill: "#991B1B",
      title: "¡Error!",
      description: <p style={{ color: "#FEF2F2" }}>{Mensaje}</p>,
      styles: {
        title: "TituloSileo Rojo",
        badge: "IconoSileo Rojo",
      },
    });
  }
  return sileo.error({
    icon: <XIcon {...MuyChico} weight="bold" />,
    fill: "#991B1B",
    title: "¡Error!",
    description: (
      <p style={{ color: "#FEF2F2" }}>
        Lo sentimos, ha ocurrido un error inesperado (Ref:{" "}
        {Codigo || "Sin Código"}), por favor vuelve a intentarlo más tarde.
      </p>
    ),
    styles: {
      title: "TituloSileo Rojo",
      badge: "IconoSileo Rojo",
    },
  });
};
export const NotificacionesPersonalizadas = ({
  Tipo,
  Icono,
  Titulo,
  Mensaje,
  TextoBoton,
  onBoton,
}) => {
  const IconoNotificacion = Icono;
  
  if (Tipo === "Exito") {
    return sileo.success({
      icon: <IconoNotificacion {...MuyChico} weight="bold" />,
      title: Titulo,
      fill: "#166534",
      description: (
        <p
          style={{
            color: "#ECFDF5",
          }}
        >
          {Mensaje}
        </p>
      ),
      styles: {
        title: "TituloSileo Verde",
        badge: "IconoSileo Verde",
      },
    });
  }
  if (Tipo === "Accion") {
    return sileo.action({
      icon: <IconoNotificacion {...MuyChico} weight="bold" />,
      title: Titulo,
      fill: "#1D4ED8",
      description: (
        <p
          style={{
            color: "#EFF6FF",
          }}
        >
          {Mensaje}
        </p>
      ),
      button: {
        title: TextoBoton,
        onClick: onBoton,
      },
      styles: {
        title: "TituloSileo Azul",
        button: "BotonSileo Azul",
        badge: "IconoSileo Azul",
      },
    });
  }
  if (Tipo === "Info") {
    return sileo.action({
      icon: <IconoNotificacion {...MuyChico} weight="bold" />,
      title: Titulo,
      fill: "#1D4ED8",
      description: (
        <p
          style={{
            color: "#EFF6FF",
          }}
        >
          {Mensaje}
        </p>
      ),
      styles: {
        title: "TituloSileo Azul",
        badge: "IconoSileo Azul",
      },
    });
  }
  if (Tipo === "Advertencia") {
    return sileo.warning({
      icon: <IconoNotificacion {...MuyChico} weight="bold" />,
      title: Titulo,
      fill: "#92400E",
      description: (
        <p
          style={{
            color: "#FFFBEB",
          }}
        >
          {Mensaje}
        </p>
      ),
      styles: {
        title: "TituloSileo Naranja",
        badge: "IconoSileo Naranja",
      },
    });
  }
  if (Tipo === "Error") {
    return sileo.error({
      icon: <IconoNotificacion {...MuyChico} weight="bold" />,
      title: Titulo,
      fill: "#991B1B",
      description: <p style={{ color: "#FEF2F2" }}>{Mensaje}</p>,
      styles: {
        title: "TituloSileo Rojo",
        badge: "IconoSileo Rojo",
      },
    });
  }
};
