import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkylesComponent } from './list-skyles.component';

describe('ListSkylesComponent', () => {
  let component: ListSkylesComponent;
  let fixture: ComponentFixture<ListSkylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSkylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSkylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
