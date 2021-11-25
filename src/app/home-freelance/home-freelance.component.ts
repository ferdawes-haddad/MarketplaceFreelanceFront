import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Blog } from '../Model/blog';
import { Cv } from '../Model/cv';
import { competence_emplois } from '../Model/competence_emplois';
import { Emplois } from '../Model/Emplois';
import { SkillsEmplois } from '../Model/SkillsEmplois';
import { User } from '../Model/user';
import { ArticleService } from '../Services/Article.service';;
import { EmploisSkylesService } from '../Services/emplois-skyles.service';
import { EmploisService } from '../Services/emplois.service';
import { UserService } from '../Services/user.service';
import { Roleenum } from '../Model/roleenum';
import { Router } from '@angular/router';
import { AjoutCvComponent } from '../Cv/ajout-cv/ajout-cv.component';
import { MailService } from '../Services/mail.service';

@Component({
  selector: 'app-home-freelance',
  templateUrl: './home-freelance.component.html',
  styleUrls: ['./home-freelance.component.css']
})
export class HomeFreelanceComponent implements OnInit {
  emplois : Emplois;
  user : User;
  skyle : SkillsEmplois;
  emploisSkyles : competence_emplois;
  blog : Blog;
  cv : Cv;

  totalLength : number;
  page : number = 1;
  form : FormGroup;
  submitted: boolean = false;
  
  roleenum : Roleenum;
  isheaderFreelance : boolean =false;
  isheaderDonneur : boolean =false;
  isheaderEsn : boolean=false;

  selectedEmplois: Emplois[];
  emp: Emplois;
  users : User;

  constructor(public emploisService: EmploisService,public userSevice: UserService, public emploisSkylesService: EmploisSkylesService, 
    public blogService: ArticleService, private modalService: NgbModal,  private router: Router, public mailService: MailService) 
  { }

  ngOnInit(): void { 
    this.getEmploi();
    this.getBlog();    
  }

  getEmploi(){
    this.emploisService.getEmploi().subscribe(
      ( data :  any ) => {
        this.emplois = data; 
        this.totalLength = data.length;
        console.log(data);
      });  
  }

  getBlog(){
    this.blogService.getBlog().subscribe(( data :  any ) => {
      this.blog = data; 
  }); 
  }

  getUser(){
    this.userSevice.getUser().subscribe(
      ( data :  any ) => {  
        this.user = data; 
      }); 
  }

  get f() { return this.form.controls;  }

  addCv() {
    const modalRef = this.modalService.open(AjoutCvComponent, );
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = { title: '', message: ''}; // should be the data
    modalRef.result.then((result) => {
      // this.taskBoardService.addCv(this.project).subscribe(res => {
      //   this.getProjectData();
      //   this.loadTasks();
      // });
    }).catch((error) => {
      console.log(error);
    });
    
  }

  //mail : string;
  getMail($mail){
    this.mailService.getMail($mail).subscribe(
      ( data :  any ) => {

      });
  }


}
