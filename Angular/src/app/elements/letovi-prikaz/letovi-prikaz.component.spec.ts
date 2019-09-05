import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetoviPrikazComponent } from './letovi-prikaz.component';

describe('LetoviPrikazComponent', () => {
  let component: LetoviPrikazComponent;
  let fixture: ComponentFixture<LetoviPrikazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetoviPrikazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetoviPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
