import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../../servicios/index.service';
import { Subject } from 'rxjs';
import * as $ from 'jquery';

declare function crearDataTable();

@Component({
  selector: 'app-log-compras',
  templateUrl: './log-compras.component.html',
  styles: []
})
export class LogComprasComponent implements OnInit {

  logs: any[];
  dtTrigger: Subject<any> = new Subject();
  constructor(private compraService: ComprasService) {
   // this.consultarLog();
  }

  ngOnInit() {
    this.consultarLog();
    crearDataTable();
    //setTimeout(() => {
 
  //  },100);
     
  }


  consultarLog() {
    this.compraService.obtenerLogCompras()
      .subscribe((respuesta: any) => {
        this.logs = respuesta;
      }, error => {
        console.log(error);
      });
  }



}
