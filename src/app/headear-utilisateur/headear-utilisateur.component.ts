import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { BehaviorSubject } from 'rxjs';
import { Roleenum } from '../Model/roleenum';


@Component({
  selector: 'app-headear-utilisateur',
  templateUrl: './headear-utilisateur.component.html',
  styleUrls: ['./headear-utilisateur.component.css']
})
export class HeadearUtilisateurComponent implements OnInit {

  token : any;
  userData : any;
  email : any;

  roleenum : Roleenum;
  isheaderFreelance = new BehaviorSubject<boolean>(false);
  isheaderDonneur = new BehaviorSubject<boolean>(false);
  isheaderEsn = new BehaviorSubject<boolean>(false);
                
  constructor(private router:Router) { }
              
  ngOnInit(): void {
              
    this.token =localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email;   
    this.getRole();
                
  }
              
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  decodedToken :any;
  getRole()
  {
    this.token = localStorage.getItem('token');
    this.decodedToken = jwt_decode(this.token);

    //console.log('this.decodedToken')
    //console.log(this.decodedToken);

    if(Roleenum.Freelance === this.decodedToken.role)
    {
      this.isheaderFreelance.next(true); 
      this.isheaderDonneur.next(false);
      this.isheaderEsn.next(false);        
    }
    else if(Roleenum.Donneur === this.decodedToken.role)
    {
      this.isheaderDonneur.next(true);
      this.isheaderFreelance.next(false); 
      this.isheaderEsn.next(false);
    }
    else if(Roleenum.Esn === this.decodedToken.role )
    {
      this.isheaderEsn.next(true);
      this.isheaderFreelance.next(false); 
      this.isheaderDonneur.next(false);
    }
  }

}
