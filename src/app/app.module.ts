import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { Example01Component } from './Examples/example01/example01.component';
import { RabGridComponent } from './shared/rab-grid/rab-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    RabGridComponent,
    HomeComponent,
    Example01Component,
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
