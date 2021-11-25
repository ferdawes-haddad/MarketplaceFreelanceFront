import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../register/confirmed.validator';
import  {  ToastrService  }  from  'ngx-toastr' ;
import { Roleenum } from 'src/app/Model/roleenum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  user =  new User();
  form : FormGroup;
  submitted: boolean = false;
  typeAcount = [ {role: 'freelance'},{role: 'donneur'}, {role: 'ESN'}];
  
  constructor(public userService:UserService, private router:Router, private formBuilder : FormBuilder, private toastr : ToastrService) { }

  ngOnInit(): void {  this.createForm(); }

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
  
  creteFormCv(){
    this.form =  this.formBuilder.group({
      
      code_postal: [null, Validators.required],
      ville: [null, Validators.required],

      post_employer : [null, Validators.required],
      date_debut : [null, Validators.required],
      date_fin : [null, Validators.required],

      nom_etablisement : [null, Validators.required],
      ville_etablisement : [null, Validators.required],
      domain_etude : [null, Validators.required],
      date_diplome : [null, Validators.required],

      titre_skyles : [null, Validators.required],  
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
       console.log(Roleenum);
       
      this.router.navigate(['/login']); 
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

  updateValidation(newValue) {
    if (newValue === 'freelance') {
      this.form.controls.createForm.setValidators(Validators.required);
      this.form.controls.createFormCv.setValidators(Validators.required);
    }
    else if (newValue === 'donneur')
    {
      this.form.controls.createForm.setValidators(Validators.required);
    }
    else if (newValue === 'esn')
    {
      this.form.controls.createForm.setValidators(Validators.required);
    }
  }

  get f() { return this.form.controls;  }



}
