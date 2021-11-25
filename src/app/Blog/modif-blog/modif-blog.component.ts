import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/Model/blog';
import { ArticleService } from 'src/app/Services/Article.service';

@Component({
  selector: 'app-modif-blog',
  templateUrl: './modif-blog.component.html',
  styleUrls: ['./modif-blog.component.css']
})
export class ModifBlogComponent implements OnInit {

  id: number;
  data: any;
  blog = new Blog();
  selectedFile: File = null;

  constructor(private route: ActivatedRoute, private blogService: ArticleService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getBlog();
  }
  getBlog() {
    this.blogService.getBlogById(this.id).subscribe(res => {
      this.data = res;
      this.blog = this.data;
    });
  }
  updateBlog() {
     this.blogService.updateBlog(this.id , this.blog).subscribe(res => {
       //console.log("modiffffffffffff")
      this.router.navigate(['/listBlog']);
     });
  }

  urllink: string = null;
  onSelectImage(event)
  {
    //this.selectedFile = <File> event.target.files[0];
    //this.selectedFile = event.srcElement.files[0];
    if (event.target.files)
    {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=> {
        this.urllink = event.target.name
      }
    }
  }
}
