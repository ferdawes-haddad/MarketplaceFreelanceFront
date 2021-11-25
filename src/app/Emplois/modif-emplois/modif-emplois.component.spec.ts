import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEmploisComponent } from './modif-emplois.component';

describe('ModifEmploisComponent', () => {
  let component: ModifEmploisComponent;
  let fixture: ComponentFixture<ModifEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifEmploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
