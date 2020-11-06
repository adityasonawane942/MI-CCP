import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeSecComponent } from './college-sec.component';

describe('CollegeSecComponent', () => {
  let component: CollegeSecComponent;
  let fixture: ComponentFixture<CollegeSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
