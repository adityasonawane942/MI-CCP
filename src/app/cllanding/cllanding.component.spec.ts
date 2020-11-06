import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CllandingComponent } from './cllanding.component';

describe('CllandingComponent', () => {
  let component: CllandingComponent;
  let fixture: ComponentFixture<CllandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CllandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CllandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
