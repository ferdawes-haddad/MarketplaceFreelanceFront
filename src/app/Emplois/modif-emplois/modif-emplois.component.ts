import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/Model/categories';
import { competence_emplois } from 'src/app/Model/competence_emplois';
import { Emplois } from 'src/app/Model/Emplois';
import { CategoriesService } from 'src/app/Services/categories.service';
import { EmploisService } from 'src/app/Services/emplois.service';
import { SkillsEmploisService } from 'src/app/Services/skillsEmplois.service';
declare var $: any;

@Component({
  selector: 'app-modif-emplois',
  templateUrl: './modif-emplois.component.html',
  styleUrls: ['./modif-emplois.component.css']
})
export class ModifEmploisComponent implements OnInit {

  id: any;
  data: any;
  type: any;
  emplois =  new Emplois(); 
  emploisSkyles = new competence_emplois(); 
  
  public cat : Categories [];
  public empSkylesTechnique : competence_emplois[];
  public empSkylesFonctionnel : competence_emplois[];

  typestatut = [{status: true}, {status:false}];


  constructor(private route: ActivatedRoute, private emploisservice: EmploisService, private router:Router,public categorieService:CategoriesService, public skylesService: SkillsEmploisService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params.id;
    this.getEmplois();
    this.getCategorie(); 
    this.getSkylesTechnique();
    this.getSkylesFonctionnel();
  }   
 
  getEmplois() {
    this.emploisservice.getEmploisById(this.id).subscribe(res => {
      this.data = res;
      this.emplois = this.data;
    });
  }

  getCategorie(){
    this.categorieService.getCategorie().subscribe(( data :  any ) => {
    this.cat = data; 
   });
 }

 getSkylesTechnique(){
   this.skylesService.getSkylesTechnique(this.type).subscribe(( data :  any ) => {
     this.empSkylesTechnique = data; 
     setTimeout(() => {
       $('.selectpicker').selectpicker('refresh');
     });
   });
 }

 getSkylesFonctionnel(){
   this.skylesService.getSkylesFonctionnel(this.type).subscribe(( data :  any ) => {
     this.empSkylesFonctionnel = data;
     setTimeout(() => {
       $('.selectpicker').selectpicker('refresh');
     });
   });
 }
  
  updateEmplois() {
     this.emploisservice.updateData(this.id , this.emplois).subscribe(res => {
      this.router.navigate(['/listEmplois']);
     });
  }

  files :  string = null;
  fileHolder: File | null;
  createQPForm: FormGroup;
  uploadImage(event){

    if (event.target.files && event.target.files.length) {
      this.fileHolder = event.target.files[0];
    }
  //console.log(newFile)
    /*if (event.target.files)
    {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=> {
        this.files = event.target.name
      }
    }*/
  }

  url : string;
onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        console.log(this.url);
      }
    }
  }
  selectedFile :any;
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile.name);
  }

 
}