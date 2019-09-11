import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaProfilComponent } from './aa-profil.component';

describe('AaProfilComponent', () => {
  let component: AaProfilComponent;
  let fixture: ComponentFixture<AaProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
