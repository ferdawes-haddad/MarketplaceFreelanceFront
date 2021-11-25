import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Webinar } from 'src/app/Model/webinar';
import { WebinnarService } from 'src/app/Services/webinnar.service';

@Component({
  selector: 'app-list-webinar',
  templateUrl: './list-webinar.component.html',
  styleUrls: ['./list-webinar.component.css']
})
export class ListWebinarComponent implements OnInit {

  webinarDialog: boolean;
  webinars: Webinar[];
  webinar: Webinar;
  selectedWebinars: Webinar[];
  submitted: boolean;

  constructor(private webinarService: WebinnarService, private messageService: MessageService, 
    private confirmationService: ConfirmationService, private router:Router) { }

    ngOnInit() {
        this.getWebinars();
    }

    getWebinars(){
      this.webinarService.getWebinnar().subscribe(( data :  any ) => {
        this.webinar = data; 
        console.log(data)
      });
    }

    deleteWebinars(nom : string ,id) {
      console.log(id);
      
      if(confirm("Are you sure to delete " + nom)) {
        this.webinarService.deleteWebinnar(id).subscribe(res => {
          this.getWebinars();
               console.log(id);
               
             } );
      }
    }
    
    editWebinars(id: number) {
      this.router.navigate(['/modifWebinar', id]);
    }

    openNew() {
      this.router.navigate(['/ajoutWebinar']);
      this.submitted = false;
      this.webinarDialog = true;
    }
  
    deleteSelectedWebinars() {
      this.confirmationService.confirm({
          message: 'Êtes-vous sûr de vouloir supprimer les produits sélectionnés?',
          header: 'Confirmer',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.webinars = this.webinars.filter(val => !this.selectedWebinars.includes(val));
              this.selectedWebinars = null;
              this.messageService.add({severity:'Succès', summary: 'À succès', detail: 'Emplois supprimés', life: 3000});
          }
      });
    }
}
