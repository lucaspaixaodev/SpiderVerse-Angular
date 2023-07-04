import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobeyMaguireComponent } from './tobey-maguire.component';

describe('TobeyMaguireComponent', () => {
  let component: TobeyMaguireComponent;
  let fixture: ComponentFixture<TobeyMaguireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TobeyMaguireComponent]
    });
    fixture = TestBed.createComponent(TobeyMaguireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
