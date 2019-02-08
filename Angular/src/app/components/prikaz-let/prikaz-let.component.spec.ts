import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazLetComponent } from './prikaz-let.component';

describe('PrikazLetComponent', () => {
  let component: PrikazLetComponent;
  let fixture: ComponentFixture<PrikazLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
