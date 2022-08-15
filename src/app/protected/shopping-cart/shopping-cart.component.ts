import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { ProtectedService } from '../services/protected.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [MessageService]
})
export class ShoppingCartComponent implements OnInit {

  constructor(private protectedService: ProtectedService
    , private primengConfig: PrimeNGConfig
    ,private messageService: MessageService,
    private router: Router) { }
  blockUI:boolean = false;
  total: number = 0;
  CSV: number = 0;
  displayModal: boolean = false;
  cc: string ="";
  cv: string ="";
  direccion: string ="";
  
  showModalDialog() {
    this.displayModal = true;
}

  get productos(){
    return this.protectedService._carrito.Productos;
  }
  ngOnInit(): void {
    this.cargar();
    this.primengConfig.ripple = true;
  }
  async cargar(){
    this.protectedService.obtenerCarrito();
    this.blockUI = true
    await new Promise(f => setTimeout(f, 1000));

  this.productos.forEach((value:any) => {
    this.total += value.productoID.precio * value.cantidad;
  });
    this.blockUI = false;
  }

  async quitarAlCarrito(ItemCarritoID: string){
    await this.protectedService.quitarCarrito(ItemCarritoID);
    this.total = 0;
    this.productos.forEach((value:any) => {
      this.total += value.productoID.precio * value.cantidad;
    });
    this.messageService.add({severity:'success', summary: 'Ok', detail: 'Item removido satisfactoriamente.'});
  }

  async pedir(direccion: string){
    await this.protectedService.crearPedido(direccion);
    this.displayModal = false;
    this.router.navigate(['/dashboard/orders'])
  }
}
