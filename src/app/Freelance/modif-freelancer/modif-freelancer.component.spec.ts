import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFreelancerComponent } from './modif-freelancer.component';

describe('ModifFreelancerComponent', () => {
  let component: ModifFreelancerComponent;
  let fixture: ComponentFixture<ModifFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
