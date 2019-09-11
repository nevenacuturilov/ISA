import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaHomeComponent } from './aa-home.component';

describe('AaHomeComponent', () => {
  let component: AaHomeComponent;
  let fixture: ComponentFixture<AaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
