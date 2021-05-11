import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { Example01Component } from './Examples/example01/example01.component';
import { Example02Component } from './Examples/example02/example02.component';
import { Example03Component } from './Examples/example03/example03.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'ex01',
  component: Example01Component
},{
  path: 'ex02',
  component: Example02Component
},{
  path: 'ex03',
  component: Example03Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
