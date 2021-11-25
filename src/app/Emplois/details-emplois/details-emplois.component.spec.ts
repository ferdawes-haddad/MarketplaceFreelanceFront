import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmploisComponent } from './details-emplois.component';

describe('DetailsEmploisComponent', () => {
  let component: DetailsEmploisComponent;
  let fixture: ComponentFixture<DetailsEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEmploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
