import "../../styles/components/global/Cargando.css";

export default function Cargando({ Texto = "Validando token..." }) {
  return (
    <section className="Cargando">
      <div className="Cargando__Rueda"></div>
      <h1>{Texto}</h1>
    </section>
  );
}
