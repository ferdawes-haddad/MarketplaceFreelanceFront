import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //data: any;

  constructor(private http: HttpClient) { }

  public getUser(){ return this.http.get('http://127.0.0.1:8000/api/users'); }
  public getUserById (id:number){ return this.http.get('http://127.0.0.1:8000/api/user/' + id); }
 
  public register(data: User) {return this.http.post('http://127.0.0.1:8000/api/register', data); }
  public deleteUser(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteUser/' + id); }
  public updateUser(id:number, data: User) { return this.http.put('http://127.0.0.1:8000/api/updateUser/' + id , data); }

  public login(data: User) { return this.http.post('http://127.0.0.1:8000/api/login', data) }

  //public addUser(data : User){ return this.http.post('http://127.0.0.1:8000/api/addUser', data); }
  public getFreelancer (role:string){ return this.http.get('http://127.0.0.1:8000/api/freelancers/' + role); }
  public getESN (role:string){ return this.http.get('http://127.0.0.1:8000/api/esns/' + role); }

}
