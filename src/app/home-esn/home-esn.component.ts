import { Component, OnInit } from '@angular/core';
import { Emplois } from '../Model/Emplois';
import { CategoriesService } from '../Services/categories.service';
import { EmploisSkylesService } from '../Services/emplois-skyles.service';
import { EmploisService } from '../Services/emplois.service';
import { SkillsEmploisService } from '../Services/skillsEmplois.service';

@Component({
  selector: 'app-home-esn',
  templateUrl: './home-esn.component.html',
  styleUrls: ['./home-esn.component.css']
})
export class HomeEsnComponent implements OnInit {

  emplois : Emplois;
  totalLength : number;
  page : number = 1;
  id:any;

  selectedEmplois: Emplois[];
  emp: Emplois;
  
  constructor(public emploisService: EmploisService, public emploisSkylesService:EmploisSkylesService, 
    public categorieService: CategoriesService, public skylesEmploisService: SkillsEmploisService) { }
 
  ngOnInit(): void {
    this.getEmploi();
  }

  getEmploi(){
    this.emploisService.getEmploi().subscribe(
      ( data :  any ) => {
        this.emplois = data; 
        this.totalLength = data.length;
        //console.log(data);
      });  
  }

}
