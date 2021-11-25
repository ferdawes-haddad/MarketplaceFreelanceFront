import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cv } from 'src/app/Model/cv';
import { User } from 'src/app/Model/user';
import { CvService } from 'src/app/Services/cv.service';


@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {

  decodedToken: any;
  token: any;
  user : User;

  data : any;
  id : number;

  cvs: Cv[];
  cv : Cv;
  cvDialog: boolean;
  submitted: boolean;
  selectedcvs: Cv[];

  constructor(public cvService: CvService, private router:Router, private serviceRoute: ActivatedRoute,
    private confirmationService: ConfirmationService, private messageService: MessageService) {   }

  ngOnInit(): void {
    //console.log(this.serviceRoute.snapshot.params.id);
    //this.id = this.serviceRoute.snapshot.params.id;
    this.getCvs();
    
  }

  getCvs(){
    this.cvService.getCv().subscribe(( data :  any ) => {
      this.cv = data;
      console.log(data);
      
  }); 
  }

  updateCv(id: number) {
    this.router.navigate(['/modifCv', id]);
  }

  openNew() {
    this.router.navigate(['/ajoutCv']);
    this.submitted = false;
    this.cvDialog = true;
  }

  deleteCv(id) {
    console.log(id);
    this.cvService.deleteCv(id).subscribe(res => {
      this.getCvs();
           console.log(id);
           
         } );
  }
  
  curr = [];
  deleteSelectedCv() {
    console.log("delete all");
    
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected Cv?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        
        accept: () => {
            this.curr = this.curr.filter(val => !this.selectedcvs.includes(val));
            this.selectedcvs = null;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Cvs Deleted', life: 3000});
        }
        
        
    });
}

}
