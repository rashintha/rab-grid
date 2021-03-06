import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { Example01Component } from './Examples/example01/example01.component';
import { RabGridComponent } from './shared/rab-grid/rab-grid.component';
import { Example02Component } from './Examples/example02/example02.component';
import { Example03Component } from './Examples/example03/example03.component';

@NgModule({
  declarations: [
    AppComponent,
    RabGridComponent,
    HomeComponent,
    Example01Component,
    Example02Component,
    Example03Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
