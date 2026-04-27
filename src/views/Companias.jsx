/** Hooks **/
import useCompanias from "@/hooks/companias/useCompanias";

export default function Companias() {
  const {
    PropsVista: { OpcionesSubMenu, ComponenteRenderizar },
  } = useCompanias();

  return (
    <div className="Companias">
      <ComponenteRenderizar />
    </div>
  );
}
