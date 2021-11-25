import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutWebinarComponent } from './ajout-webinar.component';

describe('AjoutWebinarComponent', () => {
  let component: AjoutWebinarComponent;
  let fixture: ComponentFixture<AjoutWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutWebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
