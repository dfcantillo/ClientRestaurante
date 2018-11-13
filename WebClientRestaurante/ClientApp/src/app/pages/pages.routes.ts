import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from '../shared/home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { FacturaComponent } from './factura/factura.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';
import { LogComprasComponent } from './log-compras/log-compras.component';
import { PagesComponent } from './pages.component';


const appRoutes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: "home", component: HomeComponent, data: { "Nombre": "" } },
      { path: "clientes", component: ClientesComponent, data: { "Nombre": "Clientes" } },
      { path: "compras", component: ComprasComponent, data: { "Nombre": "Compras Cliente" } },
      { path: "log", component: LogComprasComponent, data: { "Nombre": "Auditoria de compras" } },
     // { path: "factura", component: FacturaComponent, data: { "Nombre": "Facturas  Cliente" } },
     // { path: "proveedores", component: ProveedoresComponent, data: { "Nombre": "Proveedores Almacenes" } },
      { path: "producto/:id", component: ProductosComponent, data: { "Nombre": "Proveedores Almacenes" } },
      { path: "", redirectTo: "/home", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(appRoutes);
