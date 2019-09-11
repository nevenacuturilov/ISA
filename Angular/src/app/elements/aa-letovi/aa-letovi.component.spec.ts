import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaLetoviComponent } from './aa-letovi.component';

describe('AaLetoviComponent', () => {
  let component: AaLetoviComponent;
  let fixture: ComponentFixture<AaLetoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaLetoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaLetoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
