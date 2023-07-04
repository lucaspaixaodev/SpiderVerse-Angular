import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomHollandComponent } from './tom-holland.component';

describe('TomHollandComponent', () => {
  let component: TomHollandComponent;
  let fixture: ComponentFixture<TomHollandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TomHollandComponent]
    });
    fixture = TestBed.createComponent(TomHollandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
