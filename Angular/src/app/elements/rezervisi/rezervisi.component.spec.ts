import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervisiComponent } from './rezervisi.component';

describe('RezervisiComponent', () => {
  let component: RezervisiComponent;
  let fixture: ComponentFixture<RezervisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
