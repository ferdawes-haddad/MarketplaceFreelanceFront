import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFreelanceComponent } from './home-freelance.component';

describe('HomeFreelanceComponent', () => {
  let component: HomeFreelanceComponent;
  let fixture: ComponentFixture<HomeFreelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFreelanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
