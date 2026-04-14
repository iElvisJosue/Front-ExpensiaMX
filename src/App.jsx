/** Librerias **/
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Proveedores **/
import AppProviders from "./AppProviders";
/** Vista para ruta inexistente **/
// import NoExistente from "./vistas/NoExistente";
/** Protección de rutas **/
import SeguridadToken from "./security/SeguridadToken";
import SeguridadAdministradores from "./security/SeguridadAdministradores";
/** Rutas **/
import { RutasPublicas, RutasParaAdministradores } from "./AppRutas";

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          {/* Rutas no existentes */}
          {/* <Route path="*" element={<NoExistente />} /> */}

          {/* Rutas publicas (Login) */}
          {RutasPublicas.map((ruta) => (
            <Route key={ruta.path} {...ruta} />
          ))}

          {/*Rutas protegidas por token */}
          <Route element={<SeguridadToken />}>
            {/* Rutas para administradores */}
            <Route element={<SeguridadAdministradores />}>
              {RutasParaAdministradores.map((ruta) => (
                <Route key={ruta.path} {...ruta} />
              ))}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}
