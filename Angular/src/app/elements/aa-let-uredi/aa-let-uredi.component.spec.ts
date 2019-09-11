import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaLetUrediComponent } from './aa-let-uredi.component';

describe('AaLetUrediComponent', () => {
  let component: AaLetUrediComponent;
  let fixture: ComponentFixture<AaLetUrediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaLetUrediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaLetUrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
