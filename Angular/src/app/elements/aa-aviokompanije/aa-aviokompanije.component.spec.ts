import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaAviokompanijeComponent } from './aa-aviokompanije.component';

describe('AaAviokompanijeComponent', () => {
  let component: AaAviokompanijeComponent;
  let fixture: ComponentFixture<AaAviokompanijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaAviokompanijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaAviokompanijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
