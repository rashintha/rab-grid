import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.css']
})
export class Example01Component implements OnInit {

  constructor() { }

  grid_data = [{name: 'Edward Mitchel', age: 28, type: 'Admin', status: 'Active'}]

  ngOnInit(): void {
  }

}
