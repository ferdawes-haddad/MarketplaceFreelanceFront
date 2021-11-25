import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { MustMatch } from '../register/confirmed.validator';

@Component({
  selector: 'app-modif-user',
  templateUrl: './modif-user.component.html',
  styleUrls: ['./modif-user.component.css']
})
export class ModifUserComponent implements OnInit {

  id: any;
  data: any;
  user = new User();
  form : FormGroup;
  submitted: boolean = false;
  typeAccount = [ {role: ''},{role: 'freelance'},{role: 'donneur'}, {role: 'ESN'}];
  
  constructor(private route: ActivatedRoute , private userservice: UserService, private router:Router,private formBuilder : FormBuilder, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getUser();
    this.modifForm();
  }   

  getUser() {
    this.userservice.getUserById(this.id).subscribe(res => {
      this.data = res;
      this.user = this.data;
    });
  }
  
  updateUser() {

    this.userservice.updateUser(this.id, this.user).subscribe(res => { 
      this.data =res;
      console.log(res);
      this.router.navigate(['/listUser']); 
      if (this.data.status === 1)
      {
        this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        });
      }
      else {
        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut:2000,
          progressBar:true
        });
      }
    });
  }

  get f() { return this.form.controls;  }

  modifForm(){
    this.form =  this.formBuilder.group({
       nom : [null, Validators.required],
       prenom : [null, Validators.required],
       role : [null, Validators.required],
       email : ['', [Validators.required, Validators.email]],
       adresse : [null, Validators.required],
       telephone : [null, Validators.required],     
       password : ['', [Validators.required, Validators.minLength(6)]],
       confirmPassword : ['', Validators.required],
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });    
  }
}
