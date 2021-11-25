import { Component, OnInit } from '@angular/core';
import { Categories } from '../Model/categories';
import { competence_emplois } from '../Model/competence_emplois';
import { Emplois } from '../Model/Emplois';
import { SkillsEmplois } from '../Model/SkillsEmplois';
import { CategoriesService } from '../Services/categories.service';
import { EmploisSkylesService } from '../Services/emplois-skyles.service';
import { EmploisService } from '../Services/emplois.service';
import { SkillsEmploisService } from '../Services/skillsEmplois.service';

@Component({
  selector: 'app-home-donneur',
  templateUrl: './home-donneur.component.html',
  styleUrls: ['./home-donneur.component.css']
})
export class HomeDonneurComponent implements OnInit {

  emplois : Emplois;
  skillsEmplois : SkillsEmplois;
  emploisSkyles : competence_emplois;
  compEmp : competence_emplois[]; 
  skillsEmpl = new competence_emplois();
 
  empSkylesTechnique : competence_emplois;
  empSkylesFonctionnel : competence_emplois;
  categories : Categories;

  totalLength : number;
  page : number = 1;
  id:any;

  selectedEmplois: Emplois[];
  emp: Emplois;

  constructor(public emploisService: EmploisService, public emploisSkylesService:EmploisSkylesService, 
    public categorieService: CategoriesService, public skylesEmploisService: SkillsEmploisService) { }
 
  ngOnInit(): void {
    this.getEmploi();
    //this.getSkyles();
    this.getEmploisBySkills();
  }

  getEmploi(){
    this.emploisService.getEmploi().subscribe(
      ( data :  any ) => {
        this.emplois = data; 
        this.totalLength = data.length;
        //console.log(data);
      });  
  }

  getEmploisBySkills(){
    this.emploisSkylesService.getEmploisBySkills().subscribe(
      ( data :  any ) => {  
        this.skillsEmplois = data; 
        console.log(data); 
      }); 
  }

  

  getSkyles(){
    this.emploisSkylesService.getEmploisSkyles().subscribe(
      ( data :  any ) => {  
        this.emploisSkyles = data; 
        //console.log(data); 
        //console.log(this.skillsEmplois)
      }); 
  }

}
