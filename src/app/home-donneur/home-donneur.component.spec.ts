import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDonneurComponent } from './home-donneur.component';

describe('HomeDonneurComponent', () => {
  let component: HomeDonneurComponent;
  let fixture: ComponentFixture<HomeDonneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDonneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDonneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
