/** Librerias **/
import { Toaster } from "sileo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Proveedores **/
import AppProviders from "@/AppProviders";
/** Vista para ruta inexistente **/
import NoExistente from "./views/404";
/** Protección de rutas **/
import SeguridadToken from "@/security/SeguridadToken";
import SeguridadSuperAdmin from "@/security/SeguridadSuperAdmin";
import SeguridadAdministradores from "@/security/SeguridadAdministradores";
/** Rutas **/
import { RutasPublicas, RutasSuperAdmins, RutasAdministradores } from "@/AppRutas";

export default function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Toaster position="top-center" />
        <Routes>
          {/* Rutas no existentes */}
          <Route path="*" element={<NoExistente />} />
          {/* Rutas publicas (Login) */}
          {RutasPublicas.map((ruta) => (
            <Route key={ruta.path} {...ruta} />
          ))}
          {/*Rutas protegidas por token */}
          <Route element={<SeguridadToken />}>
            {/* Rutas para super administradores */}
            <Route path="/super-admin" element={<SeguridadSuperAdmin />}>
              {RutasSuperAdmins.map((ruta) => (
                <Route key={ruta.path} {...ruta} />
              ))}
            </Route>
            {/* Rutas para administradores */}
            <Route path="/:slug" element={<SeguridadAdministradores />}>
              {RutasAdministradores.map((ruta) => (
                <Route key={ruta.path} {...ruta} />
              ))}
            </Route>
          </Route>
        </Routes>
      </AppProviders>
    </BrowserRouter>
  );
}
