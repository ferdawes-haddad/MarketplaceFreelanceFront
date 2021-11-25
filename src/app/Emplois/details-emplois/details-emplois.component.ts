import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { competence_emplois } from 'src/app/Model/competence_emplois';
import { Emplois } from 'src/app/Model/Emplois';
import { EmploisService } from 'src/app/Services/emplois.service';
import { SkillsEmploisService } from 'src/app/Services/skillsEmplois.service';

@Component({
  selector: 'app-details-emplois',
  templateUrl: './details-emplois.component.html',
  styleUrls: ['./details-emplois.component.css']
})
export class DetailsEmploisComponent implements OnInit {

  emplois : Emplois;
  id : number;
  public empSkyles : competence_emplois[];

  constructor(private serviceRoute: ActivatedRoute, public empservice:EmploisService, public skylesService: SkillsEmploisService) { }

  ngOnInit(): void {
    console.log(this.serviceRoute.snapshot.params.id);
    this.id = this.serviceRoute.snapshot.params.id;
    this.getEmplois();
  }

  getEmplois() {
    this.empservice.getEmploisById(this.id).subscribe((data : Emplois) =>{
      this.emplois = data;
    });
  }

  getSkylesTechnique(){
    this.skylesService.getAllSkylesByEmplois(this.id).subscribe(( data :  any ) => {
      this.empSkyles = data; 
    });
  }
}
