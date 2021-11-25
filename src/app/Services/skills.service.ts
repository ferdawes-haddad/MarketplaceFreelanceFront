import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../Model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  public getSkills(){ return this.http.get('http://127.0.0.1:8000/api/skills'); }

  public getSkillsById (id:number){ return this.http.get('http://127.0.0.1:8000/api/skill/' + id); }

  public addSkills(data :Skills ){ return this.http.post('http://127.0.0.1:8000/api/addSkills', data); }

  public deleteSkills(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteSkills/' + id); }

  public updateSkills(id:number, data: Skills) { return this.http.put('http://127.0.0.1:8000/api/updateSkills/' + id , data); }
}
