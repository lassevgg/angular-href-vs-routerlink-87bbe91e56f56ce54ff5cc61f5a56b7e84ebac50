import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatReservedComponent } from './seat-reserved.component';

describe('SeatReservedComponent', () => {
  let component: SeatReservedComponent;
  let fixture: ComponentFixture<SeatReservedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatReservedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
