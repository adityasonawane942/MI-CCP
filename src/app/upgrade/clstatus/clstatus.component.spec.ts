import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClstatusComponent } from './clstatus.component';

describe('ClstatusComponent', () => {
  let component: ClstatusComponent;
  let fixture: ComponentFixture<ClstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
