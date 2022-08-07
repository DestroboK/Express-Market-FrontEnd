import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/interfaces';
import { ProtectedService } from '../services/protected.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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

    constructor(private protectedService: ProtectedService) { }
    get products(){
      /* Sorting the products by rating and then slicing the first 6 products. */
      return this.protectedService._productos .sort((a, b) => (a.rating > b.rating ? -1 : 1)) .slice(0, 6);
     }
      ngOnInit() {
    }   
    
    }
