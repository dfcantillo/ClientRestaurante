import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  menu: any =  [
    { NombreProducto: "Mariscos", id: "item1", img:  "background-image: url('../../../assets/images/mariscos.jpg')", descripcion: "los mejores"},
    { NombreProducto: "Juegos Naturales", id: "item2", img: "background-image: url('../../../assets/images/jugos.JPG')", descripcion: "los mejores" },
    { NombreProducto: "gaseosas", id: "item3", img: "background-image: url('../../../assets/images/gaseosas.jpg')", descripcion: "las mejores"},
    { NombreProducto: "Pescados", id: "item4", img: "background-image: url('../../../assets/images/pescados.jpg')", descripcion: "los mejores"}
  ];

  constructor() {
  }



}
