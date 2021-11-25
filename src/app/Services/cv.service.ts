import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Cv } from '../Model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  public getCv(){ return this.http.get('http://127.0.0.1:8000/api/allcvs'); }

  public getCvById (id:number){ return this.http.get('http://127.0.0.1:8000/api/cv/' + id); }

  public addCv(data : Cv){ return this.http.post('http://127.0.0.1:8000/api/addCv', data); }

  public deleteCv(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteCv/' + id); }

  public updateCv(id:number, data: Cv) { return this.http.put('http://127.0.0.1:8000/api/updateCv/' + id , data); }

  /*public findByNom (nom: string) : Observable<Cv[]>
  { 
    const filter = '{"where":{"nom":{"like":"%{nom}%"}}}';
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Cv[]>(this.link, {params});
  }*/

  
}
