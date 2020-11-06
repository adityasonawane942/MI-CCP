import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideaccoformComponent } from './outsideaccoform.component';

describe('OutsideaccoformComponent', () => {
  let component: OutsideaccoformComponent;
  let fixture: ComponentFixture<OutsideaccoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideaccoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideaccoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
