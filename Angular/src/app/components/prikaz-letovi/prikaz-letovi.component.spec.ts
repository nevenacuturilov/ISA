import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazLetoviComponent } from './prikaz-letovi.component';

describe('PrikazLetoviComponent', () => {
  let component: PrikazLetoviComponent;
  let fixture: ComponentFixture<PrikazLetoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazLetoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazLetoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
