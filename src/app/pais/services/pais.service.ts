import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  get httpParams(){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population');
  }
  
  private apiKey : string = 'https://restcountries.eu/rest/v2'
  

  constructor( private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> { 
  const url = `${this.apiKey}/name/${termino}`;
   return this.http.get<Country[]>(url, {params: this.httpParams});
  };
  buscarCapital(termino: string): Observable<Country[]> { 
    const url = `${this.apiKey}/capital/${termino}`;
     return this.http.get<Country[]>(url, {params: this.httpParams});
    };
  buscarId(id: string): Observable<Country> { 
    const url = `${this.apiKey}/alpha/${id}`;
    return this.http.get<Country>(url);
      } 
  buscarRegion(region:string): Observable<Country[]> {
    
    const url = `${this.apiKey}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(tap(console.log));
  }
}
