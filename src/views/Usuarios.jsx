/** Iconos **/
import {
  FunnelIcon,
  PlusCircleIcon,
  PlusIcon,
  UserCirclePlusIcon,
} from "@phosphor-icons/react";
/** Hooks **/
import useUsuarios from "@/hooks/usuarios/useUsuarios";
/** Componentes **/
import Encabezado from "@/components/global/Encabezado";
import ListaDeOpciones from "@/components/global/ListaDeOpciones";
import Registrar from "@/components/usuarios/registrar/Registrar";
import ModalFormularios from "@/components/modals/ModalFormularios";
/** Estilos **/
import "../styles/views/Usuarios.css";

export default function Usuarios() {
  /** Desestructamos las props **/
  const {
    PropsVista: { IconoSeccion, TituloSeccion },
    PropsModals: { verRegistrar, establecerVerRegistrar },
    PropsPeticion: { realizandoPeticion },
    PropsRegistrar,
  } = useUsuarios();
  const {
    PropsForm: { PeticionRegistrar, LimpiarFormulario },
  } = PropsRegistrar;

  return (
    <div className="Usuarios">
      {verRegistrar && (
        <ModalFormularios
          onForm={PeticionRegistrar}
          onCerrar={() => {
            establecerVerRegistrar(false);
            LimpiarFormulario();
          }}
          Boton={{
            Icono: UserCirclePlusIcon,
            Texto: "Registrar usuario",
          }}
          RealizandoPeticion={realizandoPeticion}
        >
          <Registrar {...PropsRegistrar} />
        </ModalFormularios>
      )}
      <Encabezado Icono={IconoSeccion} Seccion={TituloSeccion} />
      <ListaDeOpciones
        Botones={[
          // {
          //   onBoton: () => {
          //     establecerVerRegistrar(true);
          //   },
          //   ColorBg: "Gris",
          //   Icono: FunnelIcon,
          //   Texto: "Filtro",
          // },
          {
            onBoton: () => {
              establecerVerRegistrar(true);
            },
            Icono: PlusIcon,
            Texto: "Nuevo",
          },
        ]}
      />
    </div>
  );
}
