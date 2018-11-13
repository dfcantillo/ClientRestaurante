import { Routes, RouterModule } from "@angular/router";
import { ClientesComponent } from "./pages/clientes/clientes.component";
import { ComprasComponent } from "./pages/compras/compras.component";
import { LogComprasComponent } from "./pages/log-compras/log-compras.component";
import { FacturaComponent } from "./pages/factura/factura.component";
import { HomeComponent } from "./shared/home/home.component";
import { ProveedoresComponent } from "./pages/proveedores/proveedores.component";
import { ProductosComponent } from "./pages/productos/productos.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent, data: { "Nombre": "" } },
  { path: "**", component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
