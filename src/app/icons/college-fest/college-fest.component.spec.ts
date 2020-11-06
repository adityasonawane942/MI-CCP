import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeFestComponent } from './college-fest.component';

describe('CollegeFestComponent', () => {
  let component: CollegeFestComponent;
  let fixture: ComponentFixture<CollegeFestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeFestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
