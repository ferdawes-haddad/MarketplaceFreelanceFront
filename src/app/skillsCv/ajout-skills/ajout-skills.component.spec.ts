import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSkillsComponent } from './ajout-skills.component';

describe('AjoutSkillsComponent', () => {
  let component: AjoutSkillsComponent;
  let fixture: ComponentFixture<AjoutSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
