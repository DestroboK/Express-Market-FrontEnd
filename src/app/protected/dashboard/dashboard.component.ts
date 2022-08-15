import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/interfaces';
import { ProtectedService } from '../services/protected.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  images: any[] = [
    {path: 'https://i.blogs.es/8ceb02/pollo_entero/1366_2000.jpg', label:'Pollo en oferta'},
    {path: 'https://images8.alphacoders.com/354/thumb-1920-354039.jpg'},
    {path: 'https://p4.wallpaperbetter.com/wallpaper/665/31/674/food-bread-baking-pretzel-still-life-hd-wallpaper-preview.jpg'},
    {path: 'https://img.freepik.com/vector-gratis/composicion-realista-electrodomesticos_1284-65307.jpg?t=st=1658782930~exp=1658783530~hmac=6b493dbb7e7b30690e1c1b837c68b4878a8c8258a6f171d7224a43d8d3a93475&w=900'},
    {path: 'https://p4.wallpaperbetter.com/wallpaper/104/215/804/cheese-pepper-cheese-dairy-products-wallpaper-preview.jpg'},
    {path: 'https://almomento.net/wp-content/uploads/2018/09/brilla.jpg'}

    ]

    constructor(private protectedService: ProtectedService,private messageService: MessageService) { }
    
    products: Producto[] = []
    blockUI: boolean = false;
    //.sort((a, b) => (a.rating > b.rating ? -1 : 1)) .slice(0, 6)
    cantProd: number = 1;
    ngOnInit() {
      this.cargar()
    }  
    async cargar(){
      this.blockUI = true
      this.protectedService.obtenerProductos();
      this.protectedService.obtenerCarrito();
      await new Promise(f => setTimeout(f, 1200));
      this.products = this.protectedService._productos.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, 6);
      this.blockUI = false;
    }
    async agregarAlCarrito(cantidad:number, Producto: Producto,event:any, element:any){


      element.hide(event);
      this.cantProd = 1;
      this.protectedService.agregarCarrito(Producto._id,cantidad).subscribe(resp=>{

        if(resp.ok === true){
          Producto.cantidad = Producto.cantidad - cantidad;

          this.products.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, 6)
          this.messageService.add({severity:'success', summary: 'Ok', detail: 'Item agregado satisfactoriamente.'});
         
       
        } else {
          this.messageService.add({severity:'info', summary: 'Oops', detail: 'Alguien mas tomo los productos que quedaban...'});
          Producto.cantidad = 0;
        }
      });
    
      
    }
    
    }
