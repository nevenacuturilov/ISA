import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrikaziLetComponent } from './admin-prikazi-let.component';

describe('AdminPrikaziLetComponent', () => {
  let component: AdminPrikaziLetComponent;
  let fixture: ComponentFixture<AdminPrikaziLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrikaziLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrikaziLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
