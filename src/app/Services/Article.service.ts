import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../Model/blog';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getBlog(){ return this.http.get('http://127.0.0.1:8000/api/articles'); }

  public getBlogById (id:number){ return this.http.get('http://127.0.0.1:8000/api/article/' + id); }

  public addBlog(data : Blog){ return this.http.post('http://127.0.0.1:8000/api/addArticle', data); }

  public deleteBlog(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteArticle/' + id); }

  public updateBlog(id:number, data: Blog) { return this.http.put('http://127.0.0.1:8000/api/updateArticle/' + id , data); }
 
}
