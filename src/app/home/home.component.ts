import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emplois } from '../Model/Emplois';
import { Roleenum } from '../Model/roleenum';
import { User } from '../Model/user';
import { EmploisService } from '../Services/emplois.service';
import jwt_decode from "jwt-decode";
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emplois : Emplois;
  decodedToken: any;
  token : any;
  submitted: boolean = false;
  formlogin : FormGroup;
  roleenum : Roleenum;
  isheaderFreelance : boolean =false;
  isheaderDonneur : boolean =false;
  isheaderEsn : boolean=false;
  isFreelance = new BehaviorSubject<boolean>(false);
  isDonneur = new BehaviorSubject<boolean>(false);
  isESN = new BehaviorSubject<boolean>(false);
  userRole: Array<Roleenum> = [];
  user =  new User();

  selectedEmplois: Emplois[];
  emp: Emplois[]; 
  constructor(public data: EmploisService, public router: Router, public userService:UserService, private toastr: ToastrService,
     private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getEmploi();
    this.loginForm();
  }

  getEmploi(){
    this.data.getEmploi().subscribe(
      ( data :  any ) => {
        this.emplois = data; 
      });  
  }

  loginForm(){
    this.formlogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }

  // res:any;
  // login(){

  //   this.submitted = true;
  //   if (this.formlogin.invalid){ return; }

  //   console.log ("ferrr",this.formlogin.value)
  //   this.userService.login(this.formlogin.value).subscribe(  ( res :  any )=> {
  //     this.res = res;   
  //     this.token = this.res.res['token'];
  //     localStorage.setItem('token', this.token);

  //     this.token = localStorage.getItem('token');
  //     this.decodedToken = jwt_decode(this.token);
        
  //     console.log('this.decodedToken')
  //     console.log(this.decodedToken);
       
  //     if( Roleenum.Freelance  === this.decodedToken.roleenum){
  //       this.isFreelance.next(true);
  //       this.userRole.push(Roleenum.Freelance); 
  //     }
  //     console.log("home freelance", this.decodedToken.role);
  //     if( Roleenum.Donneur  === this.decodedToken.roleenum){
  //       this.isDonneur.next(true);
  //       this.userRole.push(Roleenum.Donneur);
  //     }
  //     if( Roleenum.Esn  === this.decodedToken.roleenum){
  //       this.isESN.next(true);
  //       this.userRole.push(Roleenum.Esn);
  //     }


  //     if (this.decodedToken.role = "freelance")
  //     {
  //      // console.log(this.decodedToken.role);
  //       this.router.navigate(['/freelance']);
  //     }
  //     if (this.decodedToken.role = "donneur")
  //     {
  //      // console.log(this.decodedToken.role);
  //       this.router.navigate(['/donneur']);
  //     }
  //     if (this.decodedToken.role = "esn")
  //     {
  //       //console.log(this.decodedToken.role);
  //       this.router.navigate(['/esn']);
  //     }

  //     this.toastr.success(JSON.stringify(this.res.message), JSON.stringify(this.res.code), {
  //       timeOut: 2000,
  //         progressBar: true
  //     });

  //    if (this.res.status === 0) {
  //     this.toastr.error(JSON.stringify(this.res.message), JSON.stringify(this.res.code), {
  //       timeOut:2000,
  //       progressBar:true
  //     });
  //   }
    
  //  });
  
  // }

  get fl() { return this.formlogin.controls;  }

  loginDialog : boolean;
  getMail(){
    this.loginDialog = true;
       
    
  }

}
