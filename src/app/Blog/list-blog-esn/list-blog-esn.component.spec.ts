import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogEsnComponent } from './list-blog-esn.component';

describe('ListBlogEsnComponent', () => {
  let component: ListBlogEsnComponent;
  let fixture: ComponentFixture<ListBlogEsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogEsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBlogEsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
