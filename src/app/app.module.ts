import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RippleModule} from 'primeng/ripple';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RippleModule,
    ToastModule,
    BrowserAnimationsModule  ,
     MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
