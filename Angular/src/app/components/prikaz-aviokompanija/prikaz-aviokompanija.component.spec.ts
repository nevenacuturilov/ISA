import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazAviokompanijaComponent } from './prikaz-aviokompanija.component';

describe('PrikazAviokompanijaComponent', () => {
  let component: PrikazAviokompanijaComponent;
  let fixture: ComponentFixture<PrikazAviokompanijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazAviokompanijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazAviokompanijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
