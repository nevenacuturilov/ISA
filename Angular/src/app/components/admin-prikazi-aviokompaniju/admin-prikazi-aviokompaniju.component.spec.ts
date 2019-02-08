import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrikaziAviokompanijuComponent } from './admin-prikazi-aviokompaniju.component';

describe('AdminPrikaziAviokompanijuComponent', () => {
  let component: AdminPrikaziAviokompanijuComponent;
  let fixture: ComponentFixture<AdminPrikaziAviokompanijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrikaziAviokompanijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrikaziAviokompanijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
