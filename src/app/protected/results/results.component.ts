import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { Producto } from '../interfaces/interfaces';
import { ProtectedService } from '../services/protected.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  products!: Producto[];

  sortOptions: SelectItem[] = [
    {label: 'Precio: Mayor a Menor', value: '!precio'},
    {label: 'Precio Menor a Mayor', value: 'precio'},
    {label: 'Rating: Mayor a Menor', value: '!rating'},
    {label: 'Rating: Menor a Mayor', value: 'rating'}
];;

  sortOrder!: number;

  sortField!: string;

  constructor(private protectedService: ProtectedService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
     this.products = this.protectedService._productos;
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
}
