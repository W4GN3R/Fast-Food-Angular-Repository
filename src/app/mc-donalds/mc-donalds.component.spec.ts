import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McDonaldsComponent } from './mc-donalds.component';

describe('McDonaldsComponent', () => {
  let component: McDonaldsComponent;
  let fixture: ComponentFixture<McDonaldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McDonaldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McDonaldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
