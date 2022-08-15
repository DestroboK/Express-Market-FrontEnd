import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ResultsComponent } from './results/results.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {path: 'presentation', component: DashboardComponent},
      {path: 'about', component: AboutComponent},
      {path: 'results', component: ResultsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'orders', component: OrdersComponent},
      {path: '**', redirectTo: 'presentation'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
