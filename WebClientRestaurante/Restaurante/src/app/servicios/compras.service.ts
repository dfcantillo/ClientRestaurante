import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators'
import { Productos } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  header: HttpHeaders = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient) { }



  registrarComprar(produto: Productos, cantidad: number) {

    const url = "api/RegistrarCompra";
    produto.CantidadCompra = cantidad;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //'Authorization': 'my-auth-token'
      })
    };
    let body = JSON.stringify(produto);
    return this.http.post<string>(url, produto, httpOptions)
      .pipe(
        map(resultado => {
          return resultado;
        })
      );
    
     

  }



}
