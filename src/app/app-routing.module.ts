import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { Example01Component } from './Examples/example01/example01.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'ex01',
  component: Example01Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
