import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {path: '', component: DashboardComponent},
    //   {path: 'details', component: DetailsComponent},
    //   {path: 'reservations', component: ReservationsComponent},
    //   {path: 'admin/books', component: BooksCrudComponent},
    //   {path: 'admin/reservations', component: ReservationsCrudComponent},
    //   {path: 'admin/users', component: UserPrivilegesComponent},
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
