import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emplois } from '../Model/Emplois';

//  const baseUrl = 'http://localhost:8080/api/emploi';

@Injectable({
  providedIn: 'root'
})
export class EmploisService { 

  constructor(private http: HttpClient) { }
 
  public getEmploi(){ return this.http.get('http://127.0.0.1:8000/api/allEmplois'); }

  public getEmploisById (id:number){ return this.http.get('http://127.0.0.1:8000/api/emplois/' + id); }

  public addEmploi(data : Emplois){ return this.http.post('http://127.0.0.1:8000/api/addEmplois', data); }

  public deleteEmp(id: number) { return this.http.delete('http://127.0.0.1:8000/api/deleteEmplois/' + id); }

  public updateData(id:number, data: Emplois) { return this.http.put('http://127.0.0.1:8000/api/updateEmplois/' + id , data); }

  //public getAllEmploisBySkyles (id:number){ return this.http.get('http://127.0.0.1:8000/api/emploisBySkyles/' + id); }

 adddocument(fd: FormData , id : any){
    const headers = new HttpHeaders();
    console.log("**************",fd);
    
    headers.append('Content-Type', 'multipart/form-data');
    this.http.post('http://127.0.0.1:8000/api/uploadimage' +id , fd, {headers}).subscribe(response =>{
      console.log(response)
    })
  }

  getAvatar(id) {
    return this.http.get('http://127.0.0.1:8000/api/image/' +id , { responseType: 'blob' });
  }

}
