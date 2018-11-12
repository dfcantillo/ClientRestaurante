import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators'
import { Productos } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  header: HttpHeaders = new HttpHeaders().set('content-type', 'application/json');

  menu: any = [
    {
      princial: "Restaurante la perla",
      descripcion: "Las mejores de comida de mar",
      img: "background-image: url('../../../assets/images/restaurante.jpg')",
      productos: [
        { NombreProducto: "gaseosas", id: "item3", img: "background-image: url('../../../assets/images/gaseosas.jpg')", descripcion: "las mejores", ruta: "/producto/1" },
        { NombreProducto: "Juegos Naturales", id: "item2", img: "background-image: url('../../../assets/images/jugos.JPG')", descripcion: "los mejores", ruta: "/producto/2" },
        { NombreProducto: "Pescados", id: "item4", img: "background-image: url('../../../assets/images/pescados.jpg')", descripcion: "los mejores", ruta: "/producto/3" },
        { NombreProducto: "Mariscos", id: "item1", img: "background-image: url('../../../assets/images/mariscos.jpg')", descripcion: "los mejores", ruta: "/producto/4" }
        
        
      ]
    }
    
  ];

  constructor(private http: HttpClient) {
  }

  ObtenerProductosPorCategoria(idCategoria: string) {
    const url = "api/ObtenerProductosPorCategoria";
    let body = JSON.stringify(idCategoria);
    return this.http.post<Productos[]>(url, idCategoria, { headers: this.header })
      .pipe(
        map(respusta => {

        return respusta;
        
        })
      );
  }


  obtenerTituloProducto(tipo: number): string {
    let titulo: string;
    if (tipo === 1) { titulo = "Gaseosas" }
    if (tipo === 2) { titulo = "Jugos Naturales" }
    if (tipo === 3) { titulo = "Pescados" }
    if (tipo === 4) { titulo = "Mariscos" }


    return titulo;
  }



}
