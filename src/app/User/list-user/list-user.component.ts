import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  id : number;
  user : User;
  selectedUser: User[];
  
  constructor(public data: UserService, private router:Router, private serviceRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    console.log(this.serviceRoute.snapshot.params.id);
    this.id = this.serviceRoute.snapshot.params.id;
    this.getUser();
  }

  getUser(){
    this.data.getUser().subscribe(( data :  any ) => {
      this.user = data; 
      console.log(data)
  });  
  }

  deleteUser(nom : string ,id) {
    console.log(id);
    
    if(confirm("Are you sure to delete " + nom)) {
      this.data.deleteUser(id).subscribe(res => {
        this.getUser();
             console.log(id);
             
           } );
    }
  }

  updateUser(id: number) {
    this.router.navigate(['/modifUser', id]);
  }


}