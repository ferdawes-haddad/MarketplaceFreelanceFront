import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-modif-freelancer',
  templateUrl: './modif-freelancer.component.html',
  styleUrls: ['./modif-freelancer.component.css']
})
export class ModifFreelancerComponent implements OnInit {

  user: User;
  id : any; 
  form : FormGroup;
  submitted: boolean;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  edit() {
    this.userService.updateUser(this.id , this.user).subscribe(res => {
     this.router.navigate(['/listFreelance']);
    });
 }

 get f() { return this.form.controls;  }

}
