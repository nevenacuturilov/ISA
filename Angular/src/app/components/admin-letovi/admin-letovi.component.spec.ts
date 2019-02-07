import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLetoviComponent } from './admin-letovi.component';

describe('AdminLetoviComponent', () => {
  let component: AdminLetoviComponent;
  let fixture: ComponentFixture<AdminLetoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLetoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLetoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
