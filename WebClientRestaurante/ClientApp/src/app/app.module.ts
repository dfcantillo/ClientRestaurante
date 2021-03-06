import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from "angular-6-datatable";
//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { ProductosComponent } from './pages/productos/productos.component';
//import { ClientesComponent } from './pages/clientes/clientes.component';
//import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
//import { FacturaComponent } from './pages/factura/factura.component';
//import { ComprasComponent } from './pages/compras/compras.component';
//import { CategoriasComponent } from './pages/categorias/categorias.component';
//import { LogComprasComponent } from './pages/log-compras/log-compras.component';
//
//import { HeaderComponent } from './shared/header/header.component';
//import { FooterComponent } from './shared/footer/footer.component';
//import { HomeComponent } from './shared/home/home.component';
//import { RutaStyleImgPipe } from './pipes/ruta-style-img.pipe';

//Rutas
import { APP_ROUTES } from './app.routes';
import { CantidadCompraComponent } from './components/cantidad-compra/cantidad-compra.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDirective } from './directives/modal.directive';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTES,
    PagesModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    //ConfirmCom
  ]
})
export class AppModule { }
