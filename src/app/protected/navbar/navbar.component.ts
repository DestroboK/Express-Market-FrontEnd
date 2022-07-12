import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';

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
  get usuario(){
    return this.authService.usuario;
  }
  inicial:string = Array.from(this.usuario.name!)[0]
  constructor(private authService: AuthService){}
  ngOnInit() {
   this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
      this.items = [
         {
            separator:true
          },
          {
              label: 'Cerrar sesion',
              icon: 'pi pi-power-off',
              title: 'Cerrar xd',
              command: (event) => {
                this.authService.logout();
            },
              routerLink: ['/auth/login']
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              style: {'margin-left': 'auto'}
          },
          {
            separator: true
          }
      ];
      this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };
    this.avatarMenu= [
      {
         label:'File',
         icon:'pi pi-fw pi-file',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-plus',
               items:[
                  {
                     label:'Bookmark',
                     icon:'pi pi-fw pi-bookmark'
                  },
                  {
                     label:'Video',
                     icon:'pi pi-fw pi-video'
                  },

               ]
            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-trash'
            },
            {
               separator:true
            },
            {
               label:'Export',
               icon:'pi pi-fw pi-external-link'
            }
         ]
      }]
    this.overlays = [
      // new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
      // new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
      // new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
      // new google.maps.Polygon({paths: [
      //     {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
      // ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
      // }),
      // new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
      // new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
  ];
  }

}
