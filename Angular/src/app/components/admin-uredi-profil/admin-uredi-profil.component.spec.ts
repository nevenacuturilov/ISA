import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUrediProfilComponent } from './admin-uredi-profil.component';

describe('AdminUrediProfilComponent', () => {
  let component: AdminUrediProfilComponent;
  let fixture: ComponentFixture<AdminUrediProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUrediProfilComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUrediProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
