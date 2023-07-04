import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesMoralesComponent } from './miles-morales.component';

describe('MilesMoralesComponent', () => {
  let component: MilesMoralesComponent;
  let fixture: ComponentFixture<MilesMoralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilesMoralesComponent]
    });
    fixture = TestBed.createComponent(MilesMoralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
