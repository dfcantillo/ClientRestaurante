import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {



  constructor(public _produc: ProductosService, private domDanitizer: DomSanitizer) {
  }

  ngOnInit() {
   // this.cambiarRutaImg();
      
  }

  //cambiarRutaImg() {
  //  for (let item of this._produc.menu) {

  //    //Se realiza esta configuración para resolver problemas con la url de angular debido a la seguridad
  //    //item.img = this.domDanitizer.bypassSecurityTrustStyle(`background-image: url(${item.ruta})`);
  //    item.img = this.domDanitizer.bypassSecurityTrustStyle(item.img);

  //  }
  //}

}
