import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

import { of, tap, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataResponse, Categoria, Producto } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProtectedService {
  public _categorias: Categoria[] = [
    {name: 'Lacteos'}, 
    {name:'Enlatados'},
    {name: 'Carnes'}, 
    {name: 'Embutidos'}, 
    {name: 'Higiene'} 
  ];
  public _productos: Producto[]= [
    {
      imagen: 'https://almacen.do/wp-content/uploads/2018/07/Leche-Evaporada-Nestle-Carnation-315-g-Front.jpg',
      rating: 5,
      ratings: [5, 5, 5],
      name: 'Leche Carnation Evaporata, 315g',
      precio: 65,
      cantidad: 12,
      categoria:[
        {name: 'Lacteos'}, 
        {name:'Enlatados'}
      ]
  },
  {
    imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/7533880003111-1712844_500x.jpg?v=1632335582',
    rating: 4,
    ratings: [5, 4, 5,4,4,5,5],
    name: 'Sardinas Paco Fish En Salsa De Tomate 215 g',
    precio: 59,
    cantidad: 5,
    categoria:[
      {"name": 'Pescados'}, 
      {"name":'Enlatados'}
    ]
},
{
  imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/31675_500x.jpg?v=1631671930',
  rating: 5,
  ratings: [5, 5, 5,5,5,5 , 5,5],
  name: 'Salami Super Especial Induveca 1.50 Lb',
  precio: 204,
  cantidad: 52,
  categoria:[
    {name: 'Carnes'}, 
    {name: 'Embutidos'}, 
    {name:'Enlatados'}
  ]
},
{
  imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/16535_500x.jpg?v=1631666030',
  rating: 0,
  ratings: [],
  name: 'Desodorante En Gel Gillette Power Beads 295ml',
  precio: 629,
  cantidad: 0,
  categoria:[
    {name: 'Higiene'}
  ]
},
{
  imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/7509546673639-2533786_1_500x.jpg?v=1656516560',
  rating: 5,
  ratings: [5,5,5,5,5,5,5,5,5,5,5,5,5],
  name: 'Jabón En Barra Protex Pro Regeneracion 3 Pack 240g',
  precio: 179,
  cantidad: 13,
  categoria:[
    {name: 'Higiene'}
  ]
},

{
  imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/38361_500x.jpg?v=1631664945',
  rating: 5,
  ratings: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  name: 'Sopita Caldo de Pollo Maggi 12 uds',
  precio: 77,
  cantidad: 25,
  categoria:[
    {name: 'Condimentos'}
  ]
},
{
  imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/41331038140-1180714_500x.jpg?v=1643208600',
  rating: 3,
  ratings: [3,2,3,3,3,3,3,3,3,3,2],
  name: 'Sopita Caldo de Pollo Maggi 12 uds',
  precio: 404,
  cantidad: 2,
  categoria:[
    {name: 'Condimentos'}
  ]
},
{
  imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/15460_500x.jpg?v=1631666645',
  rating: 5,
  ratings: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  name: 'Habichuelas Pintas La Sanjuanera 800 g',
  precio: 404,
  cantidad: 9,
  categoria:[
    {name: 'Condimentos'}
  ]
}
];
  constructor(private http: HttpClient){}




//   public obtenerCategorias(){
    
//     const url = `${ environment.baseUrl}/categories/all`;

//     return this.http.get<Categoria[]>(url)
//     .subscribe((response: Categoria[])=>{
//         this._categorias = response ;
//       }
//     ),
//     catchError(err=> of(err.error.msg));
//   }
}
