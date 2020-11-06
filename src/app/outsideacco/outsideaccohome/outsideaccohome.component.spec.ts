import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideaccohomeComponent } from './outsideaccohome.component';

describe('OutsideaccohomeComponent', () => {
  let component: OutsideaccohomeComponent;
  let fixture: ComponentFixture<OutsideaccohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideaccohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideaccohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
