"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../shared/home/home.component");
var clientes_component_1 = require("./clientes/clientes.component");
var compras_component_1 = require("./compras/compras.component");
var productos_component_1 = require("./productos/productos.component");
var log_compras_component_1 = require("./log-compras/log-compras.component");
var pages_component_1 = require("./pages.component");
var appRoutes = [
    {
        path: '', component: pages_component_1.PagesComponent,
        children: [
            { path: "home", component: home_component_1.HomeComponent, data: { "Nombre": "" } },
            { path: "clientes", component: clientes_component_1.ClientesComponent, data: { "Nombre": "Clientes" } },
            { path: "compras", component: compras_component_1.ComprasComponent, data: { "Nombre": "Compras Cliente" } },
            { path: "log", component: log_compras_component_1.LogComprasComponent, data: { "Nombre": "Auditoria de compras" } },
            // { path: "factura", component: FacturaComponent, data: { "Nombre": "Facturas  Cliente" } },
            // { path: "proveedores", component: ProveedoresComponent, data: { "Nombre": "Proveedores Almacenes" } },
            { path: "producto/:id", component: productos_component_1.ProductosComponent, data: { "Nombre": "Proveedores Almacenes" } },
            { path: "", redirectTo: "/home", pathMatch: "full" }
        ]
    }
];
exports.PAGES_ROUTES = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=pages.routes.js.map