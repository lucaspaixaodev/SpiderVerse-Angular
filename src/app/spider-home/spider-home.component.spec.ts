import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderHomeComponent } from './spider-home.component';

describe('SpiderHomeComponent', () => {
  let component: SpiderHomeComponent;
  let fixture: ComponentFixture<SpiderHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiderHomeComponent]
    });
    fixture = TestBed.createComponent(SpiderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
