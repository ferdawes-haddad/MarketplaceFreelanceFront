import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket;

  constructor(private http: HttpClient) { } 

  public getChat(){ return this.http.get('http://127.0.0.1:8000/chat'); }
}
