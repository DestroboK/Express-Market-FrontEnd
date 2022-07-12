import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {path: 'presentation', component: DashboardComponent},
    //   {path: 'details', component: DetailsComponent},
    //   {path: 'reservations', component: ReservationsComponent},
    //   {path: 'admin/books', component: BooksCrudComponent},
    //   {path: 'admin/reservations', component: ReservationsCrudComponent},
    //   {path: 'admin/users', component: UserPrivilegesComponent},
      {path: '**', redirectTo: 'presentation'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
