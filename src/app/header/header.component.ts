import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Roleenum } from '../Model/roleenum';
import { UserService } from '../Services/user.service';
import jwt_decode from "jwt-decode";
import { User } from '../Model/user';
import { MustMatch } from '../User/register/confirmed.validator';
import { AuthServiceService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  roleenum : Roleenum;
  isheaderFreelance : boolean =false;
  isheaderDonneur : boolean =false;
  isheaderEsn : boolean=false;
  formlogin : FormGroup;
  formRegister : FormGroup;

  user =  new User();
  us: User;
  data : any;
  decodedToken: any;
  token : any;
  submitted: boolean = false;
  isFreelance = new BehaviorSubject<boolean>(false);
  isDonneur = new BehaviorSubject<boolean>(false);
  isESN = new BehaviorSubject<boolean>(false);
  userRole: Array<Roleenum> = [];
  
  selectedRole: string = '';
  typeAcount = [ {role: ''},{role: 'freelance'},{role: 'donneur'}, {role: 'ESN'}];

  constructor(public userService:UserService, private router: Router, private formBuilder: FormBuilder, 
    private toastr: ToastrService, public authService: AuthServiceService) { } 
  
  ngOnInit(): void {
    this.loginForm();
    this.registerForm();
  }

  get fl() { return this.formlogin.controls;  }
  get fr() { return this.formRegister.controls }

  loginForm(){
    this.formlogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }

  registerForm(){
    this.formRegister =  this.formBuilder.group({
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

  login(){

    this.submitted = true;
    if (this.formlogin.invalid){ return; }

    console.log ("ferrr",this.formlogin.value)
    this.userService.login(this.formlogin.value).subscribe( res => {
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

  register(){
    this.submitted = true;
    if (this.formRegister.invalid){ 
      return;    
    }

    this.userService.register(this.formRegister.value).subscribe(res => { 
      this.data =res;
      console.log(res);

       console.log(this.register);
       console.log("data");
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
      this.formRegister.get('nom').reset();
      this.formRegister.get('prenom').reset();
      this.formRegister.get('role').reset();
      this.formRegister.get('email').reset();
      this.formRegister.get('adresse').reset();
      this.formRegister.get('telephone').reset();
      this.formRegister.get('password').reset();
      this.formRegister.get('confirmPassword').reset();
    });
   
  }

  url : string;
onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        console.log(this.url);
      }
    }
  }
  selectedFile : any;
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile.name);
  }

  resetpassword(email)
  {
    this.router.navigate(['/reset-password']);
    
  }
  


}