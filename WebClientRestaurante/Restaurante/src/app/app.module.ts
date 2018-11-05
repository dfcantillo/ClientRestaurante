import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { LogComprasComponent } from './pages/log-compras/log-compras.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ClientesComponent,
    ProveedoresComponent,
    FacturaComponent,
    ComprasComponent,
    CategoriasComponent,
    LogComprasComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }