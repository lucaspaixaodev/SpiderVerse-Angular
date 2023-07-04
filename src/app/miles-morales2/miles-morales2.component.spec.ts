import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesMorales2Component } from './miles-morales2.component';

describe('MilesMorales2Component', () => {
  let component: MilesMorales2Component;
  let fixture: ComponentFixture<MilesMorales2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilesMorales2Component]
    });
    fixture = TestBed.createComponent(MilesMorales2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
