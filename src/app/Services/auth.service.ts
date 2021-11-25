import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenServiceService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenServiceService, private http: HttpClient) { }

  sendResetPasswordLink(data) { 
    return this.http.post('http://127.0.0.1:8000/api/reset-password-request', data)
  }

  resetPassword(data) {
    return this.http.post('http://127.0.0.1:8000/api/change-password', data)
  }
  

}
