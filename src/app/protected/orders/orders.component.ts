import { Component, OnInit } from '@angular/core';
import { ProtectedService } from '../services/protected.service';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class OrdersComponent implements OnInit {
  blockUI: boolean = false;
  value: number = 0;
  displayModal: boolean = false;
  voto:number = 0;
  constructor(private protectedService: ProtectedService, private confirmationService: ConfirmationService, private messageService: MessageService) { }
  get pedidos(){
    return this.protectedService._pedidos;
  }
  ngOnInit(): void {
    this.cargar()
  }
  async cargar(){
    this.protectedService.obtenerPedidos();
    this.blockUI = true;
    await new Promise(f => setTimeout(f, 2500));
    this.blockUI = false;

  }

  async cancelar(PedidoID: string, event: Event){

    this.confirmationService.confirm({
      target: event.target!,
      message: '¿Estás seguro? Tus productos volveran al carrito',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.protectedService.cancelarPedido(PedidoID);
        this.messageService.add({severity:'info', summary:'Confirmado', detail:'Tu pedido ha sido cancelado satisfactoriamente.'});
      }
  });
   
  }


  async actualizar(PedidoID: string, event: Event){

    this.confirmationService.confirm({
      target: event.target!,
      message: '¿Acelerar entrega?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.protectedService.actualizarPedido(PedidoID);
        this.messageService.add({severity:'info', summary:'Confirmado', detail:'Acelerando...'});
      }
  });
   
  }

  votar(ItemCarritoID:string, ProdID:string , rating:number,event:any, element:any){

    element.hide(event);
    this.protectedService.votar(ProdID,rating,ItemCarritoID);
    this.messageService.add({severity:'success', summary:'¡Gracias por votar!'});
    this.displayModal = false;
    this.voto =0;
  }

  showModalDialog() {
    this.displayModal = true;
}
}
