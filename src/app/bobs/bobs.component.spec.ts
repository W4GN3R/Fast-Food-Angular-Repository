import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobsComponent } from './bobs.component';

describe('BobsComponent', () => {
  let component: BobsComponent;
  let fixture: ComponentFixture<BobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
