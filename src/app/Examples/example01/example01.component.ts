import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.css']
})
export class Example01Component implements OnInit {

  constructor() { }

  grid_data = [
    {name: 'Edward Mitchel', age: 28, type: 'Admin', status: 'Active'},
    {name: 'Julia Robert', age: 25, type: 'Staff', status: 'Active'},
    {name: 'Kanchana Anuradhi', age: 26, type: 'Staff', status: 'Active'},
    {name: 'Roshen Silva', age: 24, type: 'IT', status: 'Active'}
  ]

  ngOnInit(): void {
  }

}
