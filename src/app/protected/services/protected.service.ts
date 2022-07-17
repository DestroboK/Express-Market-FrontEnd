import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

import { of, tap, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataResponse, Categoria } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProtectedService {
  public _categorias: Categoria[] = [];
  constructor(private http: HttpClient){}

//   get categorias(){
//     return { ...this._categorias };
//   }

  obtenerCategorias(){
    
    const url = "https://express-market-g5.herokuapp.com/api/categories/all";

    return this.http.get<Categoria[]>(url)
    .subscribe((response: Categoria[])=>{
        this._categorias = response ;
      }
    ),
    catchError(err=> of(err.error.msg));
  }
}
