import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//RUTAS
import { PAGES_ROUTES } from "./pages.routes";
//COMPONENTES
import { HomeComponent } from '../shared/home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { FacturaComponent } from './factura/factura.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';
import { LogComprasComponent } from './log-compras/log-compras.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { RutaStyleImgPipe } from "../pipes/ruta-style-img.pipe";
import { ModalComponent } from "../components/modal/modal.component";
import { CantidadCompraComponent } from "../components/cantidad-compra/cantidad-compra.component";


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ComprasComponent,
    ProductosComponent,
    LogComprasComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    RutaStyleImgPipe,
    CantidadCompraComponent,
    ModalComponent


  ],
  exports: [
    PagesComponent,
    HomeComponent,
    ComprasComponent,
    ProductosComponent,
    LogComprasComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    RutaStyleImgPipe,
    CantidadCompraComponent,
    ModalComponent
  ],
  imports: [
    PAGES_ROUTES,
    FormsModule,
    CommonModule
  ]

})
export class PagesModule {}
