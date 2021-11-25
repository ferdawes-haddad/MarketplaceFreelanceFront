import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Categories } from 'src/app/Model/categories';
import { competence_emplois } from 'src/app/Model/competence_emplois';
import { Emplois } from 'src/app/Model/Emplois';
import { Roleenum } from 'src/app/Model/roleenum';
import { User } from 'src/app/Model/user';
import { CategoriesService } from 'src/app/Services/categories.service';
import { EmploisService } from 'src/app/Services/emplois.service';
import { SkillsEmploisService } from 'src/app/Services/skillsEmplois.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
//import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-ajout-emplois',
  templateUrl: './ajout-emplois.component.html',
  styleUrls: ['./ajout-emplois.component.css']
})
export class AjoutEmploisComponent implements OnInit {
  selectedLevel: any;
  emplois = new Emplois();
  emploisSkyles = new competence_emplois();

  categorie: Categories[];
  empSkylesTechnique: competence_emplois[];
  empSkylesFonctionnel: competence_emplois[];

  typestatut = [{ status: true }, { status: false }];
  type: any;
  form: FormGroup;
  submitted: boolean = false;

  emploisDialog: boolean;
  cat = new Categories;
  val2: number = 3;
  imageToShow: any;

  constructor(public emploisService: EmploisService, private router: Router, public categorieService: CategoriesService,
    public skylesService: SkillsEmploisService, private formBuilder: FormBuilder, private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit(): void {

    this.getCategorie();
    this.getSkylesTechnique();
    this.getSkylesFonctionnel();
    this.getAvatar
  }

  // url: string;
  onselectFile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log(this.url);
      }
    }
  }

  addEmplois() {
    console.log("---------------");

    this.emploisService.addEmploi(this.emplois).subscribe(data => {
      console.log("***********" + this.emplois);
      console.log(data);

      this.router.navigate(['/listEmplois']);

    });

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.imageToShow = reader.result;
        console.log(this.imageToShow);

      },
      false
    );
    if (this.image) {
      console.log("*************", this.image);

      reader.readAsDataURL(this.image);
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.url)
      };
    }

  }

    
  getCategorie() {
    this.categorieService.getCategorie().subscribe((categories: any) => {
      this.categorie = categories;
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });
  }

  getSkylesTechnique() {
    this.skylesService.getSkylesTechnique(this.type).subscribe((data: any) => {
      this.empSkylesTechnique = data;
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });
  }

  getSkylesFonctionnel() {
    this.skylesService.getSkylesFonctionnel(this.type).subscribe((data: any) => {
      this.empSkylesFonctionnel = data;
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      });
    });
  }

  addCategorie() {
    this.categorieService.addCategorie(this.cat).subscribe(data => {
      this.router.navigate(['/ajoutEmplois']);
    });
  }

  image: Blob;
  url: any;
  id: any;
  blob: any;

  onAvatarSelect(event): void {
    this.selectedFile = event.target.files[0] as File;
    console.log(this.selectedFile);
    console.log(this.selectedFile.name);
    const formData = new FormData();
    formData.append("image", this.selectedFile, this.selectedFile.name);
    this.setAvatar(formData, this.id);

    // modifier image de profile dans html
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

  selectedFile: any;
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
  }

  setAvatar(image: FormData, id): void {
    this.emploisService.adddocument(image, this.id);
    console.log(image)
  }

  data: any;
  getAvatar(id: any): void {
    this.data = true;
    this.emploisService.getAvatar(this.id).subscribe(
      (blob) => {
        this.createImageFromBlob(blob);
      },
      (error) => {
        this.data = false;
      },
    );
  }

  createImageFromBlob(image: Blob): void {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.imageToShow = reader.result;
      },
      false
    );
    if (image) {
      reader.readAsDataURL(image); console.log(image);

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

  // files: string = null;
  // uploadImage(event) {
  //   if (event.target.files) {
  //     var reader = new FileReader()
  //     reader.readAsDataURL(event.target.files[0])
  //     reader.onload = (event: any) => {
  //       this.files = event.target.name
  //     }
  //   }
  // }

  // createForm() {
  //   this.form = this.formBuilder.group({
  //     image: [null, Validators.required],
  //     titre: [null, Validators.required],
  //     salaire: [null, Validators.required],
  //     adresse: [null, Validators.required],
  //     //categories_id : [null, Validators.required],
  //     date_creation: [null, Validators.required],
  //     description: ['', Validators.required],
  //   });
  // }

  // createFormCategorie() {
  //   this.form = this.formBuilder.group({
  //     name: [null, Validators.required],
  //     description: ['', Validators.required],
  //   });
  // }

  // get f() { return this.form.controls; }
  // get fc() { return this.form.controls; }

}