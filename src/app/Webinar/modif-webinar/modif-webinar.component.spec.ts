import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifWebinarComponent } from './modif-webinar.component';

describe('ModifWebinarComponent', () => {
  let component: ModifWebinarComponent;
  let fixture: ComponentFixture<ModifWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifWebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
