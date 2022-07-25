import { Component, OnInit } from '@angular/core';
import { ProtectedService } from '../services/protected.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private protectedService: ProtectedService) { }


  get productos(){
    return this.protectedService._productos;
  }
  ngOnInit(): void {
    console.log(this.productos)
  }

}
