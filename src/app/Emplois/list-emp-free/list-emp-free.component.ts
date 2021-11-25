import { Component, OnInit } from '@angular/core';
import { Emplois } from 'src/app/Model/Emplois';
import { EmploisService } from 'src/app/Services/emplois.service';
import jwt_decode from "jwt-decode";
import { MailService } from 'src/app/Services/mail.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-list-emp-free',
  templateUrl: './list-emp-free.component.html',
  styleUrls: ['./list-emp-free.component.css']
})
export class ListEmpFreeComponent implements OnInit {

  selectedEmplois: Emplois[];
  emp: Emplois;
  emplois : Emplois;
  token : any;
  userData : any;
  email : any;
  constructor(public emploisService: EmploisService, public mailService:MailService) { }

  ngOnInit(): void {
    this.getEmploi();
    this.getmail(this.email);
  }

  getEmploi(){
    this.emploisService.getEmploi().subscribe(
      ( data :  any ) => {
        console.log(data)
        this.emplois = data; 
      });  
  }

  data : any;
  decodedToken: any;
  
  getmail(email){
    console.log("******", email);
    
    this.mailService.getMail(email).subscribe();
    console.log(email);
    console.log(this.getmail);
 
  }


}
