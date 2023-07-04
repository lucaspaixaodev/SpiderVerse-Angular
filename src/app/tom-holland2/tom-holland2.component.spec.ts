import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomHolland2Component } from './tom-holland2.component';

describe('TomHolland2Component', () => {
  let component: TomHolland2Component;
  let fixture: ComponentFixture<TomHolland2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TomHolland2Component]
    });
    fixture = TestBed.createComponent(TomHolland2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
