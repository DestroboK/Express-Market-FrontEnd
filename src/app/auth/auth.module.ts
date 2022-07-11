import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { AuthRoutingModule } from './auth-routing.module';

import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import {InputMaskModule} from 'primeng/inputmask';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ImageModule,
    ButtonModule,
    TooltipModule,
    ToastModule,
    InputMaskModule,
    DividerModule
  ]
})
export class AuthModule { }
