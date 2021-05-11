import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example01Component } from './example01.component';

describe('Example01Component', () => {
  let component: Example01Component;
  let fixture: ComponentFixture<Example01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Example01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
