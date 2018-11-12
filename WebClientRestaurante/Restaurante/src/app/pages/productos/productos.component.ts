import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { Productos } from '../../models/productos.model';
import { ProductosService } from '../../servicios/productos.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {

  productos: Productos[];
  titulo: string;

  constructor(private activateRoute: ActivatedRoute,  private _prodcutosService: ProductosService) {
    this.activateRoute.params.subscribe(valor => {
      console.log(valor);
      this.titulo = this._prodcutosService.obtenerTituloProducto(parseInt(valor.id));

      this._prodcutosService.ObtenerProductosPorCategoria(valor.id)
        .subscribe(respuesta => {
          this.productos = respuesta;
        }, error => console.log("Ocurrio un error ", error));

    });
  }

  ngOnInit() {
  }


}
