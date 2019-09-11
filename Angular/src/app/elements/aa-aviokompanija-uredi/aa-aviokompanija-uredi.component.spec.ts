import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaAviokompanijaUrediComponent } from './aa-aviokompanija-uredi.component';

describe('AaAviokompanijaUrediComponent', () => {
  let component: AaAviokompanijaUrediComponent;
  let fixture: ComponentFixture<AaAviokompanijaUrediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaAviokompanijaUrediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaAviokompanijaUrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
