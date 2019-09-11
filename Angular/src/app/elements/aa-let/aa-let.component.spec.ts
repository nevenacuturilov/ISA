import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaLetComponent } from './aa-let.component';

describe('AaLetComponent', () => {
  let component: AaLetComponent;
  let fixture: ComponentFixture<AaLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
