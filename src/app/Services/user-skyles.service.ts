import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSkyles } from '../Model/user-skyles';

@Injectable({
  providedIn: 'root'
})
export class UserSkylesService {
 
  constructor(private http: HttpClient) { }

  public getUsersSkyles(){ return this.http.get('http://127.0.0.1:8000/api/usersSkyles'); }

  public getEmploisSkylesById (id:number){ return this.http.get('http://127.0.0.1:8000/api/userSkyles/' + id); }

  public addEmploisSkyles(data : UserSkyles){ return this.http.post('http://127.0.0.1:8000/api/addUserSkyles', data); }

  public deleteEmploisSkyles(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteUserSkyles/' + id); }

  public updateEmploisSkyles(id:number, data: UserSkyles) { return this.http.put('http://127.0.0.1:8000/api/updateUserSkyles/' + id , data); }
}