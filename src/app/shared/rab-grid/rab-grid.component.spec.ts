import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabGridComponent } from './rab-grid.component';

describe('RabGridComponent', () => {
  let component: RabGridComponent;
  let fixture: ComponentFixture<RabGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RabGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
