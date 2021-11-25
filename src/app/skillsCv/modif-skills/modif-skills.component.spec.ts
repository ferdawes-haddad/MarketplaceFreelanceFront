import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSkillsComponent } from './modif-skills.component';

describe('ModifSkillsComponent', () => {
  let component: ModifSkillsComponent;
  let fixture: ComponentFixture<ModifSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
