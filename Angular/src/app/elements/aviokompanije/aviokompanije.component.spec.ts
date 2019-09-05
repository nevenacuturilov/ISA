import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviokompanijeComponent } from './aviokompanije.component';

describe('AviokompanijeComponent', () => {
  let component: AviokompanijeComponent;
  let fixture: ComponentFixture<AviokompanijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviokompanijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviokompanijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
