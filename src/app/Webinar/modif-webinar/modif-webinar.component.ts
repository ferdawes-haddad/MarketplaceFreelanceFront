import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { Webinar } from 'src/app/Model/webinar';
import { UserService } from 'src/app/Services/user.service';
import { WebinnarService } from 'src/app/Services/webinnar.service';
declare var $: any;

@Component({
  selector: 'app-modif-webinar',
  templateUrl: './modif-webinar.component.html',
  styleUrls: ['./modif-webinar.component.css']
})
export class ModifWebinarComponent implements OnInit {

  webinnar = new Webinar();
  id: any;
  user : User[];

  constructor(private weinarService: WebinnarService, private router: Router, private route: ActivatedRoute, 
    private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getUser();
  }

  editWebinnar() {
    this.weinarService.updateWebinnar(this.id , this.webinnar).subscribe(res => {
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
