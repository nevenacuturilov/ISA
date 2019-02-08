import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUrediLetComponent } from './admin-uredi-let.component';

describe('AdminUrediLetComponent', () => {
  let component: AdminUrediLetComponent;
  let fixture: ComponentFixture<AdminUrediLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUrediLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUrediLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
