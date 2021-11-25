import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  // title = 'socketio-angular';
  // constructor(public chatService: ChatService) { } 

  // ngOnInit(): void {
  //   this.getChat();
  //   //this.chatService.setupSocketConnection();
  // }

  // getChat(){
  //   this.chatService.getChat().subscribe(
  //     ( data :  any ) => {

  //     });
  // }

  username = 'username';
  message = '';
  messages = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('25291c0752d6089a660c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      this.messages.push(data);
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/chat', {
      username: this.username,
      message: this.message
    }).subscribe(() => this.message = '');
  }
}

