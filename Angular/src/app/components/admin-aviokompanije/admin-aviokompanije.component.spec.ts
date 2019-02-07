import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAviokompanijeComponent } from './admin-aviokompanije.component';

describe('AdminAviokompanijeComponent', () => {
  let component: AdminAviokompanijeComponent;
  let fixture: ComponentFixture<AdminAviokompanijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAviokompanijeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAviokompanijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
