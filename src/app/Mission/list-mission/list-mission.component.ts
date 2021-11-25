import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from 'src/app/Model/mission';
import { MissionService } from 'src/app/Services/mission.service';

@Component({
  selector: 'app-list-mission',
  templateUrl: './list-mission.component.html',
  styleUrls: ['./list-mission.component.css']
})
export class ListMissionComponent implements OnInit {

  public mission : Mission[];
  constructor(public data: MissionService, private router:Router) { this.mission = []; }

  ngOnInit(): void { this.getMission(); }

  getMission(){
    this.data.getMission().subscribe(( data :  any ) => {
      this.mission = data; 
    });  
  }

  deleteMission(id: number) {
    this.data.deleteMission(id).subscribe(res => {
      this.getMission();
    } );
  }

  updateMission(id: number) {
    this.router.navigate(['/modifMission', id]);
  }
}
