import { Component, OnInit, Input } from '@angular/core';
import { ProductosService, ComprasService } from '../../servicios/index.service';
import { Productos } from '../../models/productos.model';
import { List, Enumerable } from 'linqts';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Input('Compra') compra: any = {};
  productos: Productos[];
  cantidad: number;
  producto: any;
  constructor(private productosService: ProductosService, private compraService: ComprasService) { }


  ngOnInit() {
    //this.cantidad = this.compra.cantidad;
    //this.producto = this.compra.producto;
    this.productosService.obtenerProductos()
      .subscribe((resultado: Productos[]) => {
        this.productos = resultado;
      }, error => { console.log(error); })

  }

  actualizarCompra(compra) {
    const idProducto = new List<Productos>(this.productos).Where(x => x.nombre === compra.producto).Select(x => x.id).FirstOrDefault();
    //let id = this.productos.Where(x => x.Nombre === compra.producto).Select(x => x.Id).FirstOrDefault();
    compra.idProducto = idProducto;
    this.compraService.actualizarCompraCliente(compra)
      .subscribe(resultado => {
        document.location.reload();

      }, error => { console.log(error); });
    //console.log(compra);
  }



}
