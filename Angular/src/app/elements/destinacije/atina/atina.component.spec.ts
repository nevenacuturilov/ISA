import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtinaComponent } from './atina.component';

describe('AtinaComponent', () => {
  let component: AtinaComponent;
  let fixture: ComponentFixture<AtinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
