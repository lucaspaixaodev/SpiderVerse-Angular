import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomHolland3Component } from './tom-holland3.component';

describe('TomHolland3Component', () => {
  let component: TomHolland3Component;
  let fixture: ComponentFixture<TomHolland3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TomHolland3Component]
    });
    fixture = TestBed.createComponent(TomHolland3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
