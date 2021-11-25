import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFreelancerComponent } from './ajout-freelancer.component';

describe('AjoutFreelancerComponent', () => {
  let component: AjoutFreelancerComponent;
  let fixture: ComponentFixture<AjoutFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
