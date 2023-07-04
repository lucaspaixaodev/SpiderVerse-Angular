import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrewGarfield2Component } from './andrew-garfield2.component';

describe('AndrewGarfield2Component', () => {
  let component: AndrewGarfield2Component;
  let fixture: ComponentFixture<AndrewGarfield2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndrewGarfield2Component]
    });
    fixture = TestBed.createComponent(AndrewGarfield2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
