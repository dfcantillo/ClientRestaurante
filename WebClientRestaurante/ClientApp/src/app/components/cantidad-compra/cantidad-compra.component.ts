import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Productos } from '../../models/productos.model';
import swal from 'sweetalert';
import { ComprasService } from '../../servicios/index.service';

@Component({
  selector: 'app-cantidad-compra',
  templateUrl: './cantidad-compra.component.html'
})
export class CantidadCompraComponent implements OnInit {

  @Input() cantidad;
  @Input("Producto") productoAComprar: Productos;
  //@Output() totalCompra: EventEmitter<number> = new EventEmitter();

  total: number = 0;
  mostrar: boolean = false;

  constructor(private _compraService: ComprasService) { }

  ngOnInit() {
  }

  comprarProducto() {

    this.productoAComprar;
    if (this.cantidad <= 0 || this.cantidad === undefined) {
      swal("Validación", "Debe ingresar una cantidad antes de comprar", "warning");
      return;
    }
    this._compraService.registrarComprar(this.productoAComprar, this.cantidad)
      .subscribe(resultado => {
        swal("Compra", resultado, "success");
      }, error => { console.log(error) });
    //this.totalCompra.emit(this.productoAComprar.precio * this.cantidad);
  }

  cambiarTotal() {
    if (this.cantidad < 0) { this.cantidad = 0; return; }
    let cifra;
    cifra = String(this.productoAComprar.precio * this.cantidad).replace(/\D/g, "");

    this.total = (cifra === "") ? cifra : Number(cifra).toLocaleString();


  }

}
