import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpFreeComponent } from './list-emp-free.component';

describe('ListEmpFreeComponent', () => {
  let component: ListEmpFreeComponent;
  let fixture: ComponentFixture<ListEmpFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
