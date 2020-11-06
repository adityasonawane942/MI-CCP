import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClreghomeComponent } from './clreghome.component';

describe('ClreghomeComponent', () => {
  let component: ClreghomeComponent;
  let fixture: ComponentFixture<ClreghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClreghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClreghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
