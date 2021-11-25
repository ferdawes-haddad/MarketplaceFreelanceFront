import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Roleenum } from 'src/app/Model/roleenum';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import jwt_decode from "jwt-decode";
import { BehaviorSubject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user =  new User();
  form : FormGroup;
  submitted: boolean = false;
  
  roleenum : Roleenum;
  data : any;
  decodedToken: any;
  token: any;
  isFreelance = new BehaviorSubject<boolean>(false);
  isDonneur = new BehaviorSubject<boolean>(false);
  isESN = new BehaviorSubject<boolean>(false);
  userRole: Array<Roleenum> = [];

  isheaderFreelance : boolean =false;
  isheaderDonneur : boolean =false;
  isheaderEsn : boolean=false;

  constructor( public userService:UserService, private formBuilder: FormBuilder, private toastr: ToastrService, 
    private router: Router) {}

  loginForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }

  ngOnInit() { 
    this.loginForm();
  }

  get f() { return this.form.controls;  }

  
  login(){

    this.submitted = true;
    if (this.form.invalid){ return; }

    console.log ("ferrr",this.form.value)
    this.userService.login(this.form.value).subscribe( res => {
      this.data = res;   
      this.token = this.data.data['token'];
      console.log("el Token", this.data.data.token)
      localStorage.setItem('token', this.token);

      this.token = localStorage.getItem('token');
      this.decodedToken = jwt_decode(this.token);
        
      console.log('this.decodedToken')
      console.log(this.decodedToken);
       
      if( Roleenum.Freelance  === this.decodedToken.role){
        console.log("home freelancer", this.decodedToken.role);
        this.isFreelance.next(true);
        this.userRole.push(Roleenum.Freelance); 
        this.router.navigate(['/freelance']);

      }
      else if( Roleenum.Donneur  === this.decodedToken.role)
      { console.log("home donneur", this.decodedToken.role);
        this.isDonneur.next(true);
        this.userRole.push(Roleenum.Donneur);
        this.router.navigate(['/donneur']);

      }
      else if( Roleenum.Esn  === this.decodedToken.role)
      {
        console.log("home esn", this.decodedToken.role);
        this.isESN.next(true);
        this.userRole.push(Roleenum.Esn);
        this.router.navigate(['/esn']);

      }

      this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
        timeOut: 2000,
          progressBar: true
      });

     if (this.data.status === 0) {
      this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
        timeOut:2000,
        progressBar:true
      });
    }
    
   });
  
  }
  
}
