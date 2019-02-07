import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUrediAviokompanijuComponent } from './admin-uredi-aviokompaniju.component';

describe('AdminUrediAviokompanijuComponent', () => {
  let component: AdminUrediAviokompanijuComponent;
  let fixture: ComponentFixture<AdminUrediAviokompanijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUrediAviokompanijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUrediAviokompanijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
