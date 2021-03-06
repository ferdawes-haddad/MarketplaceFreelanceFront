import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCvComponent } from './ajout-cv.component';

describe('AjoutCvComponent', () => {
  let component: AjoutCvComponent;
  let fixture: ComponentFixture<AjoutCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
