import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem, PrimeNGConfig, MessageService } from 'primeng/api';
import { Producto } from '../interfaces/interfaces';
import { ProtectedService } from '../services/protected.service';
import {switchMap} from 'rxjs/operators'
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [MessageService]
})
export class ResultsComponent implements OnInit {

  get products(){
    return this.protectedService._productos_filtrados;
  }

  sortOptions: SelectItem[] = [
    {label: 'Precio: Mayor a Menor', value: '!precio'},
    {label: 'Precio Menor a Mayor', value: 'precio'},
    {label: 'Rating: Mayor a Menor', value: '!rating'},
    {label: 'Rating: Menor a Mayor', value: 'rating'}
];;

  sortOrder!: number;

  sortField!: string;
  blockUI: boolean = false;
  cantProd: number = 1;
  constructor(private protectedService: ProtectedService,private primengConfig: PrimeNGConfig, private route: ActivatedRoute, private router: Router,private messageService: MessageService) { 
  
  }
    async cargar(){

      this.blockUI = true
      this.protectedService.obtenerCarrito();
      await new Promise(f => setTimeout(f, 1000));
      this.blockUI = false;
    }
  ngOnInit() {
     this.cargar();
     
     this.primengConfig.ripple = true;
  }
  
  onSortChange(event: { value: any; }) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

 agregarAlCarrito(cantidad:number, productoID: string,event:any, element:any){
    this.protectedService.agregarCarrito(productoID,cantidad);
    element.hide(event);
    this.messageService.add({severity:'success', summary: 'Ok', detail: 'Item agregado satisfactoriamente.'});
  
  }
}
