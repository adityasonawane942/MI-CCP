import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaccoComponent } from './getacco.component';

describe('GetaccoComponent', () => {
  let component: GetaccoComponent;
  let fixture: ComponentFixture<GetaccoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetaccoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetaccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
