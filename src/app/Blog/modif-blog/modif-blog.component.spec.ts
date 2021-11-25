import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifBlogComponent } from './modif-blog.component';

describe('ModifBlogComponent', () => {
  let component: ModifBlogComponent;
  let fixture: ComponentFixture<ModifBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
