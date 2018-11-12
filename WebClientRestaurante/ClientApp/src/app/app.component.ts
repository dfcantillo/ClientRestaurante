import { Component , } from '@angular/core';
declare function svg4everybody();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurante';

  constructor() {
    svg4everybody();
  }
}
