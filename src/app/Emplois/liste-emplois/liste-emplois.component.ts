import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Categories } from 'src/app/Model/categories';
import { competence_emplois } from 'src/app/Model/competence_emplois';
import { Emplois } from 'src/app/Model/Emplois';
import { CategoriesService } from 'src/app/Services/categories.service';
import { EmploisService } from 'src/app/Services/emplois.service';
import { SkillsEmploisService } from 'src/app/Services/skillsEmplois.service';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import {MailService } from 'src/app/Services/mail.service';
declare var $: any; 

@Component({
  selector: 'app-liste-emplois',
  templateUrl: './liste-emplois.component.html',
  styleUrls: ['./liste-emplois.component.css']
})
export class ListeEmploisComponent implements OnInit {

  emplois : Emplois;
  emploisSkyles : competence_emplois[];
  categories : Categories;
  searchTerm : string;

  selectedEmplois: Emplois[]; 
  emp: Emplois[];
  emploisDialog: boolean;
  submitted: boolean;

  stateOptions: any[];
  status: string = "emplois";
  test : string;
  empSkylesTechnique : competence_emplois[];
  empSkylesFonct : competence_emplois[];
  categorie : Categories;

  constructor(public data: EmploisService, private router:Router, public categorieService: CategoriesService,public skylesEmploisService: SkillsEmploisService, 
    private confirmationService: ConfirmationService, private messageService: MessageService, 
    private primeNGConfig: PrimeNGConfig, public mailService: MailService) {
      this.stateOptions = [
        { label: "Mission", value: "false" }
      ];
  }

  ngOnInit(): void {
    
    this.getEmploi();
    this.getSkylesFonctionnel();
    this.getSkylesTechnique();
    this.primeNGConfig.ripple = true;
  }

  getEmploi(){
    this.data.getEmploi().subscribe(( data :  any ) => {
      this.emplois = data; 
      console.log(data)
    });  
  }

  getCategorie(){
    this.categorieService.getCategorie().subscribe(( categories :  any ) => {
    this.categorie = categories; 
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    });
  });
  console.log(this.categorie);
}

 type : any;
 getSkylesTechnique(){
   this.skylesEmploisService.getTitreSkylesTechnique(this.type).subscribe(
    ( data :  any ) => {
      this.empSkylesTechnique = data; 
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });
 }

 getSkylesFonctionnel(){
   this.skylesEmploisService.getSkylesFonctionnel(this.type).subscribe(
    ( data :  any ) => {
      this.empSkylesFonct = data;
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });
 } 

  deleteEmplois(nom : string ,id) {
    console.log(id);
    
    if(confirm("Are you sure to delete " + nom)) {
      this.data.deleteEmp(id).subscribe(res => {
        this.getEmploi();
             console.log(id);
             
           } );
    }
  }
  
  editEmplois(id: number) {
    this.router.navigate(['/modifEmplois', id]);
  }

  mail:any;
  getMail(){
    this.mailService.getMissionMail(this.mail).subscribe(
      ( data :  any ) => {

      });
  }

  openNew() {
    this.router.navigate(['/ajoutEmplois']);
    this.submitted = false;
    this.emploisDialog = true;
  }

  deleteSelectedEmplois() {
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer les produits sélectionnés?',
        header: 'Confirmer',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.emp = this.emp.filter(val => !this.selectedEmplois.includes(val));
            this.selectedEmplois = null;
            this.messageService.add({severity:'Succès', summary: 'À succès', detail: 'Emplois supprimés', life: 3000});
        }
    });
  }
   
}

