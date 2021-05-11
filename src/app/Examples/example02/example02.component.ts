import { Component, OnInit } from '@angular/core';
import { RABGridBorderColors, RABGridColorThemes } from 'src/app/shared/rab-grid/rab-grid.enum';
import { RABGridConfig } from 'src/app/shared/rab-grid/rab-grid.interfaces';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html',
  styleUrls: ['./example02.component.css']
})
export class Example02Component implements OnInit {

  constructor() { }

  grid01_config: RABGridConfig = {
    responsive: true,
  }

  grid02_config: RABGridConfig = {
    theme: {
      striped: true
    }
  }

  grid03_config: RABGridConfig = {
    theme: {
      color_theme: RABGridColorThemes.Dark
    }
  }

  grid04_config: RABGridConfig = {
    theme: {
      striped: true,
      color_theme: RABGridColorThemes.Default
    }
  }

  grid05_config: RABGridConfig = {
    theme: {
      hoverable: true,
      color_theme: RABGridColorThemes.Default
    }
  }

  grid06_config: RABGridConfig = {
    theme: {
      border: {
        enable: true
      }
    }
  }

  grid07_config: RABGridConfig = {
    theme: {
      border: {
        enable: true,
        color_theme: RABGridBorderColors.Default
      }
    }
  }

  grid08_config: RABGridConfig = {
    theme: {
      custom_classes: 'table-sm align-middle'
    }
  }

  grid_data = [
    {name: 'Edward Mitchel', age: 28, type: 'Admin', status: 'Active'},
    {name: 'Julia Robert', age: 25, type: 'Staff', status: 'Active'},
    {name: 'Kanchana Anuradhi', age: 26, type: 'Staff', status: 'Active'},
    {name: 'Roshen Silva', age: 24, type: 'IT', status: 'Active'}
  ]

  ngOnInit(): void {
  }

  grid3_change_color(val: number): void{
    if(this.grid03_config.theme){
      this.grid03_config.theme.color_theme = val
    }
  }

  grid4_change_color(val: number): void{
    if(this.grid04_config.theme){
      this.grid04_config.theme.color_theme = val
    }
  }

  grid5_change_color(val: number): void{
    if(this.grid05_config.theme){
      this.grid05_config.theme.color_theme = val
    }
  }

  grid7_change_color(val: number): void{
    if(this.grid07_config.theme?.border){
      this.grid07_config.theme.border.color_theme = val
    }
  }
  
}
