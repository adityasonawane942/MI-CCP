import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClregformComponent } from './clregform.component';

describe('ClregformComponent', () => {
  let component: ClregformComponent;
  let fixture: ComponentFixture<ClregformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClregformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
