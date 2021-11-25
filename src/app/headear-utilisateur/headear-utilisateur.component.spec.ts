import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadearUtilisateurComponent } from './headear-utilisateur.component';

describe('HeadearUtilisateurComponent', () => {
  let component: HeadearUtilisateurComponent;
  let fixture: ComponentFixture<HeadearUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadearUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadearUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
