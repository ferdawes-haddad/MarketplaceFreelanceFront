import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { MustMatch } from 'src/app/User/register/confirmed.validator';

@Component({
  selector: 'app-ajout-freelancer',
  templateUrl: './ajout-freelancer.component.html',
  styleUrls: ['./ajout-freelancer.component.css']
})
export class AjoutFreelancerComponent implements OnInit {

  user =  new User();
  form : FormGroup;
  submitted: boolean = false;

  constructor(public userService:UserService, private router:Router, private formBuilder : FormBuilder, private toastr : ToastrService) { } 

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form =  this.formBuilder.group({
       image : ['', Validators.required],
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

  data :  any;
  register(){
    this.submitted = true;
    if (this.form.invalid){ 
      return;    
    }

    this.userService.register(this.form.value).subscribe(res => { 
      this.data =res;
      console.log(res);

       console.log(this.register);
       console.log("data");
      this.router.navigate(['/listFreelance']); 
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
      this.submitted = false;
      this.form.get('nom').reset();
      this.form.get('prenom').reset();
      this.form.get('role').reset();
      this.form.get('mail').reset();
      this.form.get('adresse').reset();
      this.form.get('telephone').reset();
      this.form.get('password').reset();
      this.form.get('confirmPassword').reset();
    });
   
  }

  get f() { return this.form.controls;  }

}
