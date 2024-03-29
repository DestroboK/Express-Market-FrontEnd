import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ValidarTokenGuard } from './guards/token-validation.guard';

const routes: Routes = [  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
  path: 'dashboard',
  loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
  canActivate: [ValidarTokenGuard],
  canLoad: [ValidarTokenGuard]
},
{
  path: '**',
  redirectTo: 'auth'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
