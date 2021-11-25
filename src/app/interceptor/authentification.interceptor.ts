import { Injectable } from '@angular/core';
import { HttpRequest,  HttpHandler,  HttpInterceptor } from '@angular/common/http';
import { UserService } from '../Services/user.service';

@Injectable()
export class AuthentificationInterceptor implements HttpInterceptor {

  constructor(private auth: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.login;
    const newRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer '+ token)
    })
    return next.handle(newRequest);
  }
}
