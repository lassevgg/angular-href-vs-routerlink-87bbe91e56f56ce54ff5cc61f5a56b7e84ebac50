import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationTypeComponent } from './reservation-type.component';

describe('ReservationTypeComponent', () => {
  let component: ReservationTypeComponent;
  let fixture: ComponentFixture<ReservationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
