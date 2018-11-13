import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators'
import { Productos } from '../models/productos.model';
import swal from 'sweetalert';

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

  obtenerCompras() {
    const url = "api/ObtenerCompras";
    return this.http.get(url, { headers: this.header });
  }

  obtenerLogCompras() {
    const url = "api/ObtenerLogCompras";
    return this.http.get(url, { headers: this.header });
  }

  eliminarCompraCliente(idRegistro: number) {
    const url = "api/EliminarCompraCliente";
    return this.http.post(url, idRegistro, { headers: this.header })
      .pipe(
      map(resultado => {
        swal("Exitoso!", resultado, "success");
        return resultado;
        })
      );
  
  }

  actualizarCompraCliente(compra) {
    const url = "api/ActualizarCompra";
  return this.http.post(url, compra, { headers: this.header })
      .pipe(
        map(resultado => {
          swal("Exitoso!", resultado, "success");
          return resultado;
        })
      );

  }




}
