import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrewGarfieldComponent } from './andrew-garfield.component';

describe('AndrewGarfieldComponent', () => {
  let component: AndrewGarfieldComponent;
  let fixture: ComponentFixture<AndrewGarfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndrewGarfieldComponent]
    });
    fixture = TestBed.createComponent(AndrewGarfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
