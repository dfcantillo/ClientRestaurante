import { Component, OnInit } from '@angular/core';
import { ComprasService, ModalService } from '../../servicios/index.service';
import swal from 'sweetalert';
import * as $ from 'jquery';
import { Productos } from '../../models/productos.model';
import { error } from 'util';
declare function crearDataTable(id);
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styles: []
})
export class ComprasComponent implements OnInit {
  closeResult: string;
  compras: any[] = [];
  compraCliente: any = {};
  constructor(private comprasService: ComprasService,
    private modalService: ModalService
   ) {
    
  }

  ngOnInit() {
    this.obtenerComprasClientes();
   
  }


  obtenerComprasClientes() {
    this.comprasService.obtenerCompras()
      .subscribe((resultado: any) => {
        this.compras = resultado;
        crearDataTable("#tablasCompras");
      }, error => { console.log(error); })
  }

  eliminarRegistro(registro) {
    swal({
      title: "Eliminar Registro",
      text: "¿ Esta seguro que desea eliminar este registro ?",
      icon: "warning",
      buttons: {
        eliminar: {
          html: "<div style='color:red'><i class='fas fa - trash - alt'></i> Eliminar</div>",
          value: "eliminar", className: "text-dange", 
        },
        cancelar: true
      }
    })
      .then((value) => {
        switch (value) {
          case "cancelar":
            //Hacer nada
            break;
          case "eliminar":
            this.eliminarRegistroConfirmado(registro);
           // swal("Gotcha!", "Pikachu was caught!", "success");
            break;
          //default:
          //  swal("Got away safely!");
        }
      });
  }

  eliminarRegistroConfirmado(item: any) {
    this.comprasService.eliminarCompraCliente(item.id)
      .subscribe(resultado => {
        document.location.reload();

      }, error => { console.log(error); });
  }


  actualizarRegistro(item) {
    this.compraCliente = item;
  }



}
