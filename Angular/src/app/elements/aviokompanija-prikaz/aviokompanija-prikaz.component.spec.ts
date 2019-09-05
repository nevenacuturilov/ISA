import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviokompanijaPrikazComponent } from './aviokompanija-prikaz.component';

describe('AviokompanijaPrikazComponent', () => {
  let component: AviokompanijaPrikazComponent;
  let fixture: ComponentFixture<AviokompanijaPrikazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviokompanijaPrikazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviokompanijaPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
