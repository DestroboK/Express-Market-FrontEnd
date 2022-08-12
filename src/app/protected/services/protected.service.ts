import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

import { of, tap, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataResponse, Categoria, Producto, Carrito, Pedido } from '../interfaces/interfaces';
import { AuthResponse } from '../../auth/interfaces/interfaces';
import { AuthService } from '../../auth/services/auth.service';
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
  public _carrito: any =[];
  public _productos_filtrados: Producto[]= []
  public _pedidos: Pedido[]= []
  public _productos: Producto[]= [
//     {
//       imagen: 'https://almacen.do/wp-content/uploads/2018/07/Leche-Evaporada-Nestle-Carnation-315-g-Front.jpg',
//       rating: 5,
//       ratings: [5, 5, 5],
//       name: 'Leche Carnation Evaporata, 315g',
//       precio: 65,
//       cantidad: 12,
//       categoria:[
//         {name: 'Lacteos'}, 
//         {name:'Enlatados'}
//       ]
//   },
//   {
//     imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/7533880003111-1712844_500x.jpg?v=1632335582',
//     rating: 4,
//     ratings: [5, 4, 5,4,4,5,5],
//     name: 'Sardinas Paco Fish En Salsa De Tomate 215 g',
//     precio: 59,
//     cantidad: 5,
//     categoria:[
//       {"name": 'Pescados'}, 
//       {"name":'Enlatados'}
//     ]
// },
// {
//   imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/31675_500x.jpg?v=1631671930',
//   rating: 5,
//   ratings: [5, 5, 5,5,5,5 , 5,5],
//   name: 'Salami Super Especial Induveca 1.50 Lb',
//   precio: 204,
//   cantidad: 52,
//   categoria:[
//     {name: 'Carnes'}, 
//     {name: 'Embutidos'}, 
//     {name:'Enlatados'}
//   ]
// },
// {
//   imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/16535_500x.jpg?v=1631666030',
//   rating: 0,
//   ratings: [],
//   name: 'Desodorante En Gel Gillette Power Beads 295ml',
//   precio: 629,
//   cantidad: 0,
//   categoria:[
//     {name: 'Higiene'}
//   ]
// },
// {
//   imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/7509546673639-2533786_1_500x.jpg?v=1656516560',
//   rating: 5,
//   ratings: [5,5,5,5,5,5,5,5,5,5,5,5,5],
//   name: 'Jabón En Barra Protex Pro Regeneracion 3 Pack 240g',
//   precio: 179,
//   cantidad: 13,
//   categoria:[
//     {name: 'Higiene'}
//   ]
// },

// {
//   imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/38361_500x.jpg?v=1631664945',
//   rating: 5,
//   ratings: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
//   name: 'Sopita Caldo de Pollo Maggi 12 uds',
//   precio: 77,
//   cantidad: 25,
//   categoria:[
//     {name: 'Condimentos'}
//   ]
// },
// {
//   imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/41331038140-1180714_500x.jpg?v=1643208600',
//   rating: 3,
//   ratings: [3,2,3,3,3,3,3,3,3,3,2],
//   name: 'Sopita Caldo de Pollo Maggi 12 uds',
//   precio: 404,
//   cantidad: 2,
//   categoria:[
//     {name: 'Condimentos'}
//   ]
// },
// {
//   imagen: 'https://cdn.shopify.com/s/files/1/0043/4903/4560/products/15460_500x.jpg?v=1631666645',
//   rating: 5,
//   ratings: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
//   name: 'Habichuelas Pintas La Sanjuanera 800 g',
//   precio: 404,
//   cantidad: 9,
//   categoria:[
//     {name: 'Condimentos'}
//   ]
// }
];
  constructor(private http: HttpClient, private authService: AuthService){}




  public obtenerCategorias(){
    
    const url = `${ environment.baseUrl}/categories/all`;

    return this.http.get<Categoria[]>(url)
    .subscribe((response: Categoria[])=>{
        this._categorias = response ;
      }
    ),
    catchError(err=> of(err.error.msg));
  }
  public obtenerProductos(){
    
    const url = `${ environment.baseUrl}/producto/all`;

    return this.http.get<Producto[]>(url)
    .subscribe((response: Producto[])=>{
        this._productos = response ;
      }
    ),
    catchError(err=> of(err.error.msg));
  }

  public buscarProductos(categoria?: string, query?: string){
    
    const url = `${ environment.baseUrl}/producto/search`;
    const body = { categoria, query }
    return this.http.post<Producto[]>(url,body)
    .subscribe((response: Producto[])=>{
        this._productos_filtrados = response ;
        this.obtenerCarrito();
      }),
      catchError(err=> of(err.error.msg));
  }

  public crearCarrito(userID: string){
    
    const url = `${ environment.baseUrl}/carrito/newcarrito`;
    const Productos: any[]=[]
    const body = { userID, Productos }
    return this.http.post<any[]>(url,body)
    .subscribe((response)=>{

      }),
      catchError(err=> of(err.error.msg));
  }

  public obtenerCarrito(){
    
    const url = `${ environment.baseUrl}/carrito/getcarrito`;
    const headers = new HttpHeaders()
    .set('userID', this.authService.usuario.uid || '');
    return this.http.get<Carrito>(url,{headers: headers})
    .subscribe((response: any)=>{
        this._carrito = response[0] ;
      }
    ),
    catchError(err=> of(err.error.msg));
  }
  public agregarCarrito(productoID: string, cantidad:number){
    
    const url = `${ environment.baseUrl}/carrito/ponercarrito`;
    const body = {productoID, cantidad, carritoID: this._carrito._id};
    return this.http.post<any>(url,body)
    .subscribe((response)=>{
    
      }
    ),
    catchError(err=> of(err.error.msg));
  }


  public crearPedido(Direccion_entrega: string){
    
    const url = `${ environment.baseUrl}/pedidos/new`;
    const body = {Direccion_entrega, CarritoID: this._carrito._id};
    return this.http.post<any>(url,body)
    .subscribe((response)=>{
        console.log(response);
                this.obtenerCarrito();
      }
    ),
    catchError(err=> of(err.error.msg));
  }

  public quitarCarrito(ItemCarritoID: string){
    
    const url = `${ environment.baseUrl}/carrito/quitarcarrito`;
    const body = {ItemCarritoID};
    return this.http.post<any>(url,body)
    .subscribe((response)=>{
      this.obtenerCarrito();
      }
    ),
    catchError(err=> of(err.error.msg));
  }

  public obtenerPedidos(){
    
    const url = `${ environment.baseUrl}/pedidos/get`;
    const headers = new HttpHeaders()
    .set('userID', this.authService.usuario.uid || '');
    return this.http.get<Pedido[]>(url,{headers: headers})
    .subscribe((response: Pedido[])=>{
       this._pedidos = response;
      }
    ),
    catchError(err=> of(err.error.msg));
  }
  public cancelarPedido(PedidoID: string){
    
    const url = `${ environment.baseUrl}/pedidos/cancelar`;
    const body = {PedidoID};
    return this.http.post<any>(url,body)
    .subscribe((response)=>{
      this.obtenerPedidos();
      }
    ),
    catchError(err=> of(err.error.msg));
  }

  public actualizarPedido(PedidoID: string){
    
    const url = `${ environment.baseUrl}/pedidos/actualizar`;
    const body = {PedidoID};
    return this.http.post<any>(url,body)
    .subscribe((response)=>{
      this.obtenerPedidos();
      }
    ),
    catchError(err=> of(err.error.msg));
  }

  public votar(  _id:string, rating:number, ItemCarritoID:string){
    
    const url = `${ environment.baseUrl}/producto/vote`;
    const body = {_id, rating, ItemCarritoID};
    return this.http.post<any>(url,body)
    .subscribe((response)=>{
        this.obtenerPedidos();
      }
    ),
    catchError(err=> of(err.error.msg));
  }
}
