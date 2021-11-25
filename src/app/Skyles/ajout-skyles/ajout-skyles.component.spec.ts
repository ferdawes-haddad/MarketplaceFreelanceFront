import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSkylesComponent } from './ajout-skyles.component';

describe('AjoutSkylesComponent', () => {
  let component: AjoutSkylesComponent;
  let fixture: ComponentFixture<AjoutSkylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSkylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSkylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
