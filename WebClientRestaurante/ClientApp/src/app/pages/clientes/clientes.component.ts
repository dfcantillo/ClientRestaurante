import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/index.service';
import { error } from 'protractor';
declare function crearDataTable(id);
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClienteService) {
    
  }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.obtnerClientesRegistrados()
      .subscribe((resultado: any) => {
        this.clientes = resultado;
        crearDataTable("#tablaClientes");
      }, error => { console.log(error); });
  }

}
