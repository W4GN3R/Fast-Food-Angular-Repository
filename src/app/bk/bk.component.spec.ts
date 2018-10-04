import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkComponent } from './bk.component';

describe('BkComponent', () => {
  let component: BkComponent;
  let fixture: ComponentFixture<BkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
