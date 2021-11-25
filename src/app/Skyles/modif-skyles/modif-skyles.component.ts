import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsEmplois } from 'src/app/Model/SkillsEmplois';
import { SkillsEmploisService } from 'src/app/Services/skillsEmplois.service';

@Component({
  selector: 'app-modif-skyles',
  templateUrl: './modif-skyles.component.html',
  styleUrls: ['./modif-skyles.component.css']
})
export class ModifSkylesComponent implements OnInit {

  id: any;
  data: any;
  sk = new SkillsEmplois();
  typeSkyles = [{type: 'technique'}, {type:'fonctinnel'}];

  constructor(private route: ActivatedRoute , private skylesservice: SkillsEmploisService, private router:Router) { }

  ngOnInit(): void {
   // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getSkyles();
  }   
  getSkyles() {
    this.skylesservice.getSkylesById(this.id).subscribe(res => {
      this.data = res;
      this.sk = this.data;
    }); 
  }
  
  updateSkyles() {
     this.skylesservice.updateSkyles(this.id , this.sk).subscribe(res => {
      this.router.navigate(['/listSkyles']);
     });
  }

}
