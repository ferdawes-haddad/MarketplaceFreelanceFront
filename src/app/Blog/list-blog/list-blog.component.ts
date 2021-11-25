import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/blog';
import { ArticleService } from 'src/app/Services/Article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {

  blog : Blog;
  blogs : Blog[];
  selectedBlog: Blog[];
  cheminImage:any = "assets/images/blog-04a.jpg";
  availableBlogs: Blog[];
  selectedBlogs: Blog[];
  draggedBlog: Blog;

  images: any[];

  constructor(public blogService: ArticleService, private router:Router) { }

  ngOnInit(): void {
    this.selectedBlogs = [];
    this.getBlog();
  }
  
  getBlog(){
    this.blogService.getBlog().subscribe(( data :  any ) => {
      this.blog = data; 
  }); 
  }

  deleteBlog(id: number) {
    this.blogService.deleteBlog(id).subscribe(res => {
      this.getBlog();
    } );
  } 

  updateBlog(id: number) {
    this.router.navigate(['/modifBlog', id]);
  }

  dragStart(event,blog: Blog) {
    this.draggedBlog = blog;
  }

}
