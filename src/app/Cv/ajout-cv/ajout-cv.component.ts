import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from 'src/app/Model/cv';
import { Skills } from 'src/app/Model/skills';
import { SkillsCV } from 'src/app/Model/skills-cv';
import { User } from 'src/app/Model/user';
import { CvService } from 'src/app/Services/cv.service';
import { SkillsService } from 'src/app/Services/skills.service';
import { UserService } from 'src/app/Services/user.service';

declare var $: any;

@Component({
  selector: 'app-ajout-cv',
  templateUrl: './ajout-cv.component.html',
  styleUrls: ['./ajout-cv.component.css']
})
export class AjoutCvComponent implements OnInit {

  form : FormGroup;
  submitted: boolean = false;
  cv =  new Cv();
  users: User[];

  skills = new Skills();
  skillsCV : SkillsCV[]; 
  SkylesCv = new SkillsCV();
  data : any;

  constructor(private formBuilder : FormBuilder, public cvService: CvService, private router:Router, 
    public skillsService:SkillsService, private toastr : ToastrService, public userService : UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getSkylesCv();
  }

  addCv(){
    this.cvService.addCv(this.cv).subscribe(data => {
      this.router.navigate(['/listCv']);
      console.log(this.cv);
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

  createForm() {
    this.form = this.formBuilder.group({
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

}
