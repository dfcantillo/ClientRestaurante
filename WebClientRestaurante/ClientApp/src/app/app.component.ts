import { Component, } from '@angular/core';
import { RouterLink, Router } from '@angular/router'
declare function svg4everybody();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurante';
  ruta: any;
  constructor(private _router: Router) {
    svg4everybody();
    this.ruta = document.location.hash;
    console.log(this.ruta);
  }
}
