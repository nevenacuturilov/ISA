import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaAviokompanijaComponent } from './aa-aviokompanija.component';

describe('AaAviokompanijaComponent', () => {
  let component: AaAviokompanijaComponent;
  let fixture: ComponentFixture<AaAviokompanijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaAviokompanijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaAviokompanijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
