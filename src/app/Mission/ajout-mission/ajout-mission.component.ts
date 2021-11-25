import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from 'src/app/Model/mission';
import { MissionService } from 'src/app/Services/mission.service';

@Component({
  selector: 'app-ajout-mission',
  templateUrl: './ajout-mission.component.html',
  styleUrls: ['./ajout-mission.component.css']
})
export class AjoutMissionComponent implements OnInit {

  m = new Mission();

  ND = [{nature_demande: 'Régie'}, {nature_demande: 'Forfait'}, {nature_demande: 'Recrutement'} ];
  ST = [{skyles_techniques: 'Angular'},{skyles_techniques: 'Laravel'}, {skyles_techniques: 'Spring boot'}, {skyles_techniques: 'Flutter'},{skyles_techniques: 'Java'}];
  SF = [{skyles_fonctinnels: 'Développement'},{skyles_fonctinnels: 'Test'},{skyles_fonctinnels: 'Ressources humaines'}];

  constructor(public data:MissionService, private router:Router) { }

  ngOnInit(): void {
  }

  addMiss(){ 
    this.data.addMission(this.m).subscribe(data => {
      this.router.navigate(['/listMission']);
    }); 
  }


}
