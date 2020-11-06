import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideaccoComponent } from './outsideacco.component';

describe('OutsideaccoComponent', () => {
  let component: OutsideaccoComponent;
  let fixture: ComponentFixture<OutsideaccoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideaccoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideaccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
