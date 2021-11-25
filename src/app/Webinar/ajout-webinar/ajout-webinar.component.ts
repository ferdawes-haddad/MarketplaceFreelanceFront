import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { Webinar } from 'src/app/Model/webinar';
import { UserService } from 'src/app/Services/user.service';
import { WebinnarService } from 'src/app/Services/webinnar.service';
declare var $: any;

@Component({
  selector: 'app-ajout-webinar',
  templateUrl: './ajout-webinar.component.html',
  styleUrls: ['./ajout-webinar.component.css']
})
export class AjoutWebinarComponent implements OnInit {

  webinnar = new Webinar();
  user : User[];
  constructor(private router:Router, private webinnarService: WebinnarService, private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  addWebinnar(){  
    this.webinnarService.addWebinnar(this.webinnar).subscribe(data => {
      this.router.navigate(['/listWebinar']);
    }); 
  }

  role: any;
  getUser() {
    this.userService.getESN(this.role).subscribe((user: any) => {
      this.user = user;
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });
  }
}
