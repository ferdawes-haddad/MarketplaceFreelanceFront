import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from 'src/app/Model/cv';
import { SkillsCV } from 'src/app/Model/skills-cv';
import { User } from 'src/app/Model/user';
import { CvService } from 'src/app/Services/cv.service';
import { SkillsService } from 'src/app/Services/skills.service';
import { UserService } from 'src/app/Services/user.service';
declare var $: any;

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {

  id: any;
  cv = new Cv();
  SkylesCv = new SkillsCV();
  skillsCV : SkillsCV[]; 
  users: User[];
  

  constructor(private route: ActivatedRoute, private cvservice: CvService, private router:Router,
    public skillsService:SkillsService, public userService : UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getSkylesCv();
    this.getUsers();
  }

  updateCv() {
    this.cvservice.updateCv(this.id , this.cv).subscribe(res => {
     this.router.navigate(['/listCv']);
    });
 }

 getSkylesCv(){
  this.skillsService.getSkills().subscribe(( data :  any ) => {
    this.skillsCV = data; 
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    });
  });
  }

  getUsers() {
    this.userService.getUser().subscribe((data: any) => {
      this.users = data;
      console.log(this.getUsers);
      
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });
  }
}
