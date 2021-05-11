import { Component, OnInit } from '@angular/core';
import { RABGridConfig } from 'src/app/shared/rab-grid/rab-grid.interfaces';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html',
  styleUrls: ['./example02.component.css']
})
export class Example02Component implements OnInit {

  constructor() { }

  grid_config: RABGridConfig = {
    responsive: true,
    stripped: true
  }

  ngOnInit(): void {
  }

}
