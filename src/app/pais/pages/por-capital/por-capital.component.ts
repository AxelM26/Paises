import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino  : string = '';
  hayerror : boolean = false;
  capital   : Country[] = [];

  get traerCapital () {
    return this.capital;
  }

  constructor( private paisService: PaisService ){}
  
  buscar(termino :string){
    this.hayerror = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
    .subscribe(
      (paises) => {console.log(paises);
        this.capital = paises;
     },

     (err) => {this.hayerror = true;
               this.capital   = [];
              });
  }

  
  sugerencias(termino:string){
    this.hayerror = false;
  }
}
