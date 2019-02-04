import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentACarServisiComponent } from './rent-a-car-servisi.component';

describe('RentACarServisiComponent', () => {
  let component: RentACarServisiComponent;
  let fixture: ComponentFixture<RentACarServisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentACarServisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentACarServisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
