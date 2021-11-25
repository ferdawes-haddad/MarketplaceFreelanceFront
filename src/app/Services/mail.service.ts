import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  getMail(mail){ 
    return this.http.get('http://127.0.0.1:8000/api/send-email/'+mail); 
  }

  getMissionMail(mail){
    return this.http.get('http://127.0.0.1:8000/api/mission-email/'+mail);
  }
}
