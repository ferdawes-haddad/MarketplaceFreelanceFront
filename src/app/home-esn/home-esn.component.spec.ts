import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEsnComponent } from './home-esn.component';

describe('HomeEsnComponent', () => {
  let component: HomeEsnComponent;
  let fixture: ComponentFixture<HomeEsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
