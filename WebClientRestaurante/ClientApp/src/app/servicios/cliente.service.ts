import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  header: HttpHeaders = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient) { }

  obtnerClientesRegistrados() {
    const url = "api/ObtenerClientesRegistrados";
    return this.http.get(url, { headers: this.header });
  }

}
