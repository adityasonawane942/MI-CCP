import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCultComponent } from './college-cult.component';

describe('CollegeCultComponent', () => {
  let component: CollegeCultComponent;
  let fixture: ComponentFixture<CollegeCultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeCultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeCultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
