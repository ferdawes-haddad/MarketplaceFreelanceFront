import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillsEmplois } from '../Model/SkillsEmplois';

@Injectable({
  providedIn: 'root'
})
export class SkillsEmploisService {

  constructor(private http: HttpClient) { }

  public getSkyles(){ return this.http.get('http://127.0.0.1:8000/api/skillsEmplois'); }

  public getSkylesById (id:number){ return this.http.get('http://127.0.0.1:8000/api/skillsEmplois/' + id); }

  public addSkyles(data : SkillsEmplois){ return this.http.post('http://127.0.0.1:8000/api/addSkillsEmplois', data); }

  public deleteSkyles(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteSkillsEmplois/' + id); }

  public updateSkyles(id:number, data: SkillsEmplois) { return this.http.put('http://127.0.0.1:8000/api/updateSkillsEmplois/' + id , data); }

  public getSkylesTechnique (type:string){ return this.http.get('http://127.0.0.1:8000/api/skillsEmploisT/' + type); }
  public getSkylesFonctionnel (type:string){ return this.http.get('http://127.0.0.1:8000/api/skillsEmploisF/' + type); }
  public getTitreSkylesTechnique (type:string){ return this.http.get('http://127.0.0.1:8000/api/skillsEmploisTitreT/' + type); }

  public getAllSkylesByEmplois (id:number){ return this.http.get('http://127.0.0.1:8000/api/skylesByEmplois/' + id); }
  


}
