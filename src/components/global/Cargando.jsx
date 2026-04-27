import "../../styles/components/global/Cargando.css";

export default function Cargando({ Clase, Texto = "Validando token..." }) {
  const ClaseCargando = Clase ? `Cargando ${Clase}` : "Cargando";

  return (
    <section className={ClaseCargando}>
      <div className="Cargando__Rueda"></div>
      <h1>{Texto}</h1>
    </section>
  );
}
