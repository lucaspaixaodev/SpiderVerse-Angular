import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobeyMaguire2Component } from './tobey-maguire2.component';

describe('TobeyMaguire2Component', () => {
  let component: TobeyMaguire2Component;
  let fixture: ComponentFixture<TobeyMaguire2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TobeyMaguire2Component]
    });
    fixture = TestBed.createComponent(TobeyMaguire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
