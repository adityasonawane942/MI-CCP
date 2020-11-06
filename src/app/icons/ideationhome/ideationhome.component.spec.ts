import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeationhomeComponent } from './ideationhome.component';

describe('IdeationhomeComponent', () => {
  let component: IdeationhomeComponent;
  let fixture: ComponentFixture<IdeationhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeationhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeationhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
