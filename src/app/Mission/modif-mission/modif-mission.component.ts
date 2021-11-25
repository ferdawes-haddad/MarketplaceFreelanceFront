import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from 'src/app/Model/mission';
import { MissionService } from 'src/app/Services/mission.service';

@Component({
  selector: 'app-modif-mission',
  templateUrl: './modif-mission.component.html',
  styleUrls: ['./modif-mission.component.css']
})

export class ModifMissionComponent implements OnInit {

  id: number; 
  data: any;
  m = new Mission();

  ND = [{nature_demande: 'Régie'}, {nature_demande: 'Forfait'}, {nature_demande: 'Recrutement'} ];
  ST = [{skyles_techniques: 'Angular'},{skyles_techniques: 'Laravel'}, {skyles_techniques: 'Spring boot'}, {skyles_techniques: 'Flutter'},{skyles_techniques: 'Java'}];
  SF = [{skyles_fonctinnels: 'Développement'},{skyles_fonctinnels: 'Test'},{skyles_fonctinnels: 'Ressources humaines'}];

  constructor(private route: ActivatedRoute, private missionService: MissionService, private router:Router) { }

  ngOnInit(): void {
   // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getMission();
  }
  getMission() {
    this.missionService.getMissionById(this.id).subscribe(res => {
      this.data = res;
      this.m = this.data;
    });
  }
  updateMission() {
     this.missionService.updateMission(this.id , this.m).subscribe(res => {
      this.router.navigate(['/listMission']);
     });
  }

}
