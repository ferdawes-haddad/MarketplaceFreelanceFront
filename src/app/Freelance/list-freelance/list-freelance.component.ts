import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import jwt_decode from "jwt-decode";
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService, MessageService} from 'primeng/api';
import { ChatService } from 'src/app/Services/chat.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-freelance',
  templateUrl: './list-freelance.component.html',
  styleUrls: ['./list-freelance.component.css']
})
export class ListFreelanceComponent implements OnInit {

  decodedToken: any;
  token: any;
  user : User;
  users : User[];
  selectedInter: User[];
  userDialog: boolean;
  submitted: boolean;

  data : any;
  id : number;
  role: any;
  constructor(public userService: UserService, private router:Router, private serviceRoute: ActivatedRoute,
     private confirmationService: ConfirmationService, private messageService: MessageService, public chatService: ChatService,
     public http: HttpClient) {   }

  ngOnInit(): void {
    this.getUser();
    this.Chat();
  }

  getUser(){
    this.userService.getFreelancer(this.role).subscribe(
      ( data :  any ) => {
        this.user = data; 
        console.log(this.user);
        
      });  
  }

  updateUser(id: number) {
    this.router.navigate(['/modifFreelance', id]);
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  deleteUser(nom : string ,id) {
    console.log(id);
    
    if(confirm("Are you sure to delete " + nom)) {
      this.userService.deleteUser(id).subscribe(res => {
        this.getUser();
             console.log(id);
             
           } );
    }
  }

  Chat(){
    console.log("********", this.chatService.getChat);
    
    //this.http.get('http://127.0.0.1:8000/chat');
    this.chatService.getChat().subscribe(
      ( data :  any ) => {
        console.log(data);
                
      });
  }
  
  deleteSelected() {
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer les freelancers sélectionnés?',
        header: 'Confirmer',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.users = this.users.filter(val => !this.selectedInter.includes(val));
            console.log(this.selectedInter);
            console.log(this.users);
            
            
            this.selectedInter = null;
            this.messageService.add({severity:'Succès', summary: 'À succès', detail: 'Freelancers supprimés', life: 3000});
        }
    });
  }
} 
