import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazAviokompanijeComponent } from './prikaz-aviokompanije.component';

describe('PrikazAviokompanijeComponent', () => {
  let component: PrikazAviokompanijeComponent;
  let fixture: ComponentFixture<PrikazAviokompanijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazAviokompanijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazAviokompanijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
