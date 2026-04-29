/** Iconos **/
import { PlusIcon } from "@phosphor-icons/react";
/** Hooks **/
import useUsuarios from "@/hooks/usuarios/useUsuarios";
/** Componentes **/
import Cargando from "@/components/global/Cargando";
import Encabezado from "@/components/global/Encabezado";
import SinResultados from "@/components/global/SinResultados";
import TextoResultados from "@/components/global/TextoResultados";
import TituloPrincipal from "@/components/global/TituloPrincipal";
import ListaDeOpciones from "@/components/global/ListaDeOpciones";
import CardUsuario from "@/components/usuarios/administrar/CardUsuario";
import RegistrarUsuario from "@/components/usuarios/registrar/RegistrarUsuario";
import ActualizarUsuario from "@/components/usuarios/administrar/ActualizarUsuario";
/** Estilos **/
import "../styles/views/Usuarios.css";

export default function Usuarios() {
  /** Desestructamos las props **/
  const {
    PropsVista: { IconoSeccion, TituloSeccion, establecerUsuarioEditar },
    PropsModals: {
      verRegistrar,
      establecerVerRegistrar,
      verActualizar,
      establecerVerActualizar,
    },
    PropsPeticiones: { ActualizarEstadoLocal },
    PropsListado: { cargando, listaUsuarios },
    PropsRegistrar,
    PropsActualizar,
  } = useUsuarios();

  return (
    <div className="Usuarios">
      {verRegistrar && <RegistrarUsuario {...PropsRegistrar} />}
      {verActualizar && <ActualizarUsuario {...PropsActualizar} />}
      <Encabezado Icono={IconoSeccion} Seccion={TituloSeccion} />
      <TituloPrincipal Texto={"Lista de usuarios"} />
      <ListaDeOpciones
        Botones={[
          {
            onBoton: () => {
              establecerVerRegistrar(true);
            },
            Icono: PlusIcon,
            Texto: "Nuevo",
          },
        ]}
      />
      {cargando ? (
        <Cargando
          Clase={"Ajustado Transparente"}
          Texto="Cargando usuarios..."
        />
      ) : (
        <div className="Usuarios__Listado">
          {/* Texto con cantidad de resultados */}
          {listaUsuarios.length > 0 && (
            <TextoResultados Cantidad={listaUsuarios.length} />
          )}
          {/* Listado de usuarios (Si hay) */}
          {listaUsuarios.length > 0 ? (
            listaUsuarios.map((usuario) => (
              <CardUsuario
                key={usuario.id_usuario}
                Usuario={usuario}
                onEditar={() => {
                  establecerVerActualizar(true);
                  establecerUsuarioEditar(usuario);
                }}
                onActualizarEstadoLocal={() =>
                  ActualizarEstadoLocal(usuario.id_usuario)
                }
              />
            ))
          ) : (
            <SinResultados Texto="¡No hay usuarios registrados!" />
          )}
        </div>
      )}
    </div>
  );
}
