import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rab4GridComponent } from './rab4-grid.component';

describe('Rab4GridComponent', () => {
  let component: Rab4GridComponent;
  let fixture: ComponentFixture<Rab4GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rab4GridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rab4GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
