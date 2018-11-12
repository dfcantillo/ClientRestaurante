import { Routes, RouterModule } from "@angular/router";
import { ClientesComponent } from "./pages/clientes/clientes.component";
import { ComprasComponent } from "./pages/compras/compras.component";
import { LogComprasComponent } from "./pages/log-compras/log-compras.component";
import { FacturaComponent } from "./pages/factura/factura.component";
import { HomeComponent } from "./shared/home/home.component";
import { ProveedoresComponent } from "./pages/proveedores/proveedores.component";
import { ProductosComponent } from "./pages/productos/productos.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent, data: { "Nombre": "" } },
  { path: "clientes", component: ClientesComponent, data: { "Nombre": "Clientes" } },
  { path: "compras", component: ComprasComponent, data: { "Nombre": "Compras Cliente" } },
  { path: "log", component: LogComprasComponent, data: { "Nombre": "Auditoria de compras" } },
  { path: "factura", component: FacturaComponent, data: { "Nombre": "Facturas  Cliente" } },
  { path: "proveedores", component: ProveedoresComponent, data: { "Nombre": "Proveedores Almacenes" } },
  { path: "producto/:id", component: ProductosComponent, data: { "Nombre": "Proveedores Almacenes" } },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
