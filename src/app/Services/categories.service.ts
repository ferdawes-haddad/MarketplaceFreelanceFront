import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../Model/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategorie(){ return this.http.get('http://127.0.0.1:8000/api/categories'); }

  public getCategorieById (id:number){ return this.http.get('http://127.0.0.1:8000/api/categorie/' + id); }

  public addCategorie(data : Categories){ return this.http.post('http://127.0.0.1:8000/api/addCategorie', data); }

  public deleteCategorie(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteCategorie/' + id); }  

  public updateCategorie(id:number, data: Categories) { return this.http.put('http://127.0.0.1:8000/api/updateCategorie/' + id , data); }

}
