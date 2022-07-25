import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProtectedService } from '../services/protected.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  avatarMenu!: MenuItem[];
  options: any;
  cities!: any[];
  selectedCity!: any;
  overlays!: any[];
  value3: string ="Hello";
  inicial:string = Array.from(this.usuario.name!)[0]
  
  selectedCategories: string[] = [];
  constructor(private authService: AuthService, private protectedService: ProtectedService, private router: Router){}
  ngOnInit() {
      this.items = [
          {
              label: 'Carrito',
              icon: 'pi pi-shopping-cart',
              routerLink: ['shopping-cart'],
              title: 'Mi Carrito'
          },
          {
              label: 'Pedidos',
              icon: 'pi pi-dollar',
              routerLink: ['orders'],
              title: 'Mis Pedidos'

          }
      ];
      this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };
    this.avatarMenu= [
      {
         
            label: 'Cerrar sesion',
            icon: 'pi pi-power-off',
            title: 'Cerrar xd',
            command: (event) => {
              this.authService.logout();
          },
          routerLink: ['/auth/login']
          
      }]
  }

  get usuario(){
   return this.authService.usuario;
 }
 get categorias(){
  return this.protectedService._categorias;
 }
navegar(){
  this.router.navigateByUrl('/dashboard/presentation')
}
}
