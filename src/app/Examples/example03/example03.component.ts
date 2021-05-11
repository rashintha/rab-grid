import { Component, OnInit } from '@angular/core';
import { RABGridConfig } from 'src/app/shared/rab-grid/rab-grid.interfaces';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.component.html',
  styleUrls: ['./example03.component.css']
})
export class Example03Component implements OnInit {

  grid_data = [
    {name: 'Edward Mitchel', age: 28, type: 'Admin', status: 'Active'},
    {name: 'Julia Robert', age: 25, type: 'Staff', status: 'Active'},
    {name: 'Kanchana Anuradhi', age: 26, type: 'Staff', status: 'Active'},
    {name: 'Roshen Silva', age: 24, type: 'IT', status: 'Active'},
    {name: 'Sameera Perera', age: 21, type: 'IT', status: 'Active'},
    {name: 'Malik Fernando', age: 27, type: 'Management', status: 'Active'}
  ]

  grid01_config: RABGridConfig = {
    pagination: {
      enable: true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
