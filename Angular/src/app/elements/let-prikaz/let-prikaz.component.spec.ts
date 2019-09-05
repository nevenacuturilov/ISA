import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetPrikazComponent } from './let-prikaz.component';

describe('LetPrikazComponent', () => {
  let component: LetPrikazComponent;
  let fixture: ComponentFixture<LetPrikazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetPrikazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
