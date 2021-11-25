import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSkylesComponent } from './modif-skyles.component';

describe('ModifSkylesComponent', () => {
  let component: ModifSkylesComponent;
  let fixture: ComponentFixture<ModifSkylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifSkylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSkylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
