import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emplois } from 'src/app/Model/Emplois';
import { User } from 'src/app/Model/user';
import { EmploisService } from 'src/app/Services/emplois.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  
  id:number;
  user : User;
  emplois : Emplois;
  data: any; 
  public emp : Emplois[]= [];
    
  constructor(public userservice: UserService, private serviceRoute: ActivatedRoute, public empservice:EmploisService) { 
    //this.user = [];
  }

  ngOnInit(): void {
 
    console.log(this.serviceRoute.snapshot.params.id);
    this.id = this.serviceRoute.snapshot.params.id;
    this.getUser();
    this.getEmplois();
  }

  getUser() {
    this.userservice.getUserById(this.id).subscribe((data : User) =>{
      this.user = data;
    });
  }

  getEmplois(){
    this.empservice.getEmploi().subscribe(( data :  any ) => {
      this.emp = data; 
  });  
  }

}
