import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinhomeComponent } from './checkinhome.component';

describe('CheckinhomeComponent', () => {
  let component: CheckinhomeComponent;
  let fixture: ComponentFixture<CheckinhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
