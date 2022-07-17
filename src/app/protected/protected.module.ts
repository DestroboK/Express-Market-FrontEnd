import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import {GMapModule} from 'primeng/gmap';

import {PanelMenuModule} from 'primeng/panelmenu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import { MainComponent } from './main/main.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {RadioButtonModule} from 'primeng/radiobutton';
@NgModule({
  declarations: [
    DashboardComponent,
    ShoppingCartComponent,
    OrdersComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MenuModule,
    MenubarModule,
    AvatarModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    GMapModule,
    ContextMenuModule,
    TabViewModule,
    DropdownModule,
    PanelMenuModule,
    OverlayPanelModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    RadioButtonModule
  ]
})
export class ProtectedModule { }
