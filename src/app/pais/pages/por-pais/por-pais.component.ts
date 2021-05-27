import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
    cursor: pointer;
    }
    a{
      text-decoration: none;
      
    }
    `
  ]
})
export class PorPaisComponent  {

  termino  : string = '';
  hayerror : boolean = false;
  pais   : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencias: boolean = false

  get traerPais () {
    return this.pais;
  }
 
  constructor( private paisService: PaisService ){}

  buscar(termino :string){
    this.hayerror = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe(
      (paises) => {console.log(paises);
        this.pais = paises;
     },

     (err) => {this.hayerror = true;
               this.pais   = [];
              });
  }

  sugerencias(termino:string){
    this.hayerror = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0.5),
    (err) => this.paisesSugeridos = []
    );
  }

}
