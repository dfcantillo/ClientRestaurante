import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'rutaStyleImg'
})
export class RutaStyleImgPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }
  transform(value: string, args?: any): any {
    //his.domDanitizer.bypassSecurityTrustStyle(item.img)

  //Se realiza esta configuración para resolver problemas con la url de angular debido a la seguridad
    return this.domSanitizer.bypassSecurityTrustStyle(value);
  }

}
