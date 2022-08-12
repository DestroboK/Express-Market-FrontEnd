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
import {RatingModule} from 'primeng/rating';
import {GalleriaModule} from 'primeng/galleria';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import { MainComponent } from './main/main.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DataViewModule} from 'primeng/dataview';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ResultsComponent } from './results/results.component';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {BlockUIModule} from 'primeng/blockui';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [
    DashboardComponent,
    ShoppingCartComponent,
    OrdersComponent,
    NavbarComponent,
    MainComponent,
    ResultsComponent
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
    ButtonModule,
    GalleriaModule,
    DropdownModule,
    OverlayPanelModule,
    RadioButtonModule,
    DataViewModule,
    IvyCarouselModule,
    RatingModule,
    DialogModule,
    PanelModule,
    ChipModule,
    TableModule,
    AccordionModule,
    BlockUIModule,
    InputNumberModule,
    ToastModule,
    DialogModule,
    ConfirmPopupModule,
    ProgressBarModule
  ]
})
export class ProtectedModule { }
