import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/blog';
import { ArticleService } from 'src/app/Services/Article.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent implements OnInit {

  blog = new Blog();
  selectedFile: File ;
  public user : User[];

  selectedState: any = null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];


  
  constructor(public data:ArticleService, private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  addBlog(){ 
    this.data.addBlog(this.blog).subscribe(data => {
      this.router.navigate(['/listBlog']);
    }); 
  }

  url : string;
  onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        console.log(this.url);
      }
    }
  }
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile.name);
  }
  
} 
