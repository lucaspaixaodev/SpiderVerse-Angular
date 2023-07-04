import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobeyMaguire3Component } from './tobey-maguire3.component';

describe('TobeyMaguire3Component', () => {
  let component: TobeyMaguire3Component;
  let fixture: ComponentFixture<TobeyMaguire3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TobeyMaguire3Component]
    });
    fixture = TestBed.createComponent(TobeyMaguire3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
