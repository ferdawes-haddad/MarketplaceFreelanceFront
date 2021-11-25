import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SkillsEmplois } from 'src/app/Model/SkillsEmplois';
import { SkillsEmploisService } from 'src/app/Services/skillsEmplois.service';

@Component({
  selector: 'app-list-skyles',
  templateUrl: './list-skyles.component.html',
  styleUrls: ['./list-skyles.component.css']
})
export class ListSkylesComponent implements OnInit {

  skillsEmplois : SkillsEmplois[];
  skillsEmp : SkillsEmplois;
  selectedSkillsEmplois: SkillsEmplois[];
  skillsEmploisDialog: boolean;

  constructor(public data: SkillsEmploisService, private router:Router, private confirmationService: ConfirmationService, private messageService: MessageService) { 
  }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(){
    this.data.getSkyles().subscribe(
      ( data :  any ) => {
        this.skillsEmp = data; 
      });  
  }

  deleteSkyles(nom : string ,id) {
    console.log(id);
    
    if(confirm("Are you sure to delete " + nom)) {
      this.data.deleteSkyles(id).subscribe(res => {
        this.getSkills();
             console.log(id);
             
           } );
    }
    
  }

  updateSkyles(id: number) {
    this.router.navigate(['/modifSkyles', id]);
  }

  openNew() {
    this.router.navigate(['/ajoutSkyles']);
    this.skillsEmploisDialog = true;
  }

  deleteSelectedSkillsEmplois() {
    console.log("*********"+this.skillsEmplois);
    console.log("dddd"+this.skillsEmp);
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer les produits sélectionnés?',
        header: 'Confirmer',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          console.log("+++++++++++"+this.skillsEmplois);
            this.skillsEmplois = this.skillsEmplois.filter(val => !this.selectedSkillsEmplois.includes(val));
            this.selectedSkillsEmplois = null;
            this.messageService.add({severity:'Succès', summary: 'À succès', detail: 'Skills supprimés', life: 3000});
        }
    });
  }
  
  
}
