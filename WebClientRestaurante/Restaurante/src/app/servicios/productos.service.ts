import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  menu: any =  [
    { NombreProducto: "Mariscos", img: "background-image: url('../../../assets/images/mariscos.jpg')", descripcion: "los mejores", ruta:"../../../assets/images/mariscos.jpg"},
    { NombreProducto: "Juegos Naturales", img: "background-image: url('../../../assets/images/jugos.jpg')", descripcion: "los mejores", ruta: "../../../assets/images/mariscos.jpg" },
    { NombreProducto: "gaseosas", img: "background-image: url('../../../assets/images/gaseosas.jpg')", descripcion: "las mejores", ruta: "../../../assets/images/mariscos.jpg"},
    { NombreProducto: "Pescados", img: "background-image: url('../../../assets/images/pescados.jpg')", descripcion: "los mejores", ruta: "../../../assets/images/mariscos.jpg"}
  ];

  constructor() {
  }



}
