import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviokompanijePrikazComponent } from './aviokompanije-prikaz.component';

describe('AviokompanijePrikazComponent', () => {
  let component: AviokompanijePrikazComponent;
  let fixture: ComponentFixture<AviokompanijePrikazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviokompanijePrikazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviokompanijePrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
