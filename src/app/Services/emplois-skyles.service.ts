import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { competence_emplois } from '../Model/competence_emplois';

@Injectable({
  providedIn: 'root'
})
export class EmploisSkylesService {

  constructor(private http: HttpClient) { } 

  public getEmploisSkyles(){ return this.http.get('http://127.0.0.1:8000/api/empsskyles'); }

  public getEmploisSkylesById (id:number){ return this.http.get('http://127.0.0.1:8000/api/empskyles/' + id); }

  public addEmploisSkyles(data : competence_emplois){ return this.http.post('http://127.0.0.1:8000/api/addEmpSkyles', data); }

  public deleteEmploisSkyles(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteEmpSkyles/' + id); }

  public updateEmploisSkyles(id:number, data: competence_emplois) { return this.http.put('http://127.0.0.1:8000/api/updateEmpSkyles/' + id , data); }

  public getEmploisBySkills(){ return this.http.get('http://127.0.0.1:8000/api/EmploisBySkilles'); }

}
