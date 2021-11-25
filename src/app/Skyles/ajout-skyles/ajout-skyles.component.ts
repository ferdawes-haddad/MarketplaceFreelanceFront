import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsEmplois } from 'src/app/Model/SkillsEmplois';
import { SkillsEmploisService } from 'src/app/Services/skillsEmplois.service';

@Component({
  selector: 'app-ajout-skyles',
  templateUrl: './ajout-skyles.component.html',
  styleUrls: ['./ajout-skyles.component.css']
})
export class AjoutSkylesComponent implements OnInit {

  s =  new SkillsEmplois();
  typeSkyles = [{type: 'technique'}, {type:'fonctionnel'}];
  
  constructor( public data:SkillsEmploisService, private router:Router, private http: HttpClient) { }

  ngOnInit(): void {  }

  addSkyles(){  
    this.data.addSkyles(this.s).subscribe(data => {
      this.router.navigate(['/listSkyles']);
    }); 
  }
  
}
