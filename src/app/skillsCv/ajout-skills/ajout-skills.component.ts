import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/Model/skills';
import { SkillsService } from 'src/app/Services/skills.service';
 
@Component({
  selector: 'app-ajout-skills',
  templateUrl: './ajout-skills.component.html',
  styleUrls: ['./ajout-skills.component.css']
})
export class AjoutSkillsComponent implements OnInit {

  s =  new Skills();
    
  constructor( public skillsService:SkillsService, private router:Router, private http: HttpClient) { }

  ngOnInit(): void {  }

  addSkills(){  
    this.skillsService.addSkills(this.s).subscribe(data => {
      //this.router.navigate(['/listSkills']);
    }); 
  }

}
