import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from '../Model/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  public getMission(){ return this.http.get('http://127.0.0.1:8000/api/missions'); }

  public getMissionById (id:number){ return this.http.get('http://127.0.0.1:8000/api/mission/' + id); }

  public addMission(data : Mission){ return this.http.post('http://127.0.0.1:8000/api/addMission', data); }

  public deleteMission(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteMission/' + id); }

  public updateMission(id:number, data: Mission) { return this.http.put('http://127.0.0.1:8000/api/updateMission/' + id , data); }
}
