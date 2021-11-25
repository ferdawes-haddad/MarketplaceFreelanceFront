import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Webinar } from '../Model/webinar';

@Injectable({
  providedIn: 'root'
})
export class WebinnarService {

  constructor(private http: HttpClient) { }

  public getWebinnar(){ return this.http.get('http://127.0.0.1:8000/api/webinars'); }

  public getWebinnarById (id:number){ return this.http.get('http://127.0.0.1:8000/api/webinar/' + id); }

  public addWebinnar(data : Webinar){ return this.http.post('http://127.0.0.1:8000/api/addWebinnar', data); }

  public deleteWebinnar(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteWebinar/' + id); }

  public updateWebinnar(id:number, data: Webinar) { return this.http.put('http://127.0.0.1:8000/api/updateWebinar/' + id , data); }
  
}
