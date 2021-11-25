import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/Model/categories';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-modif-categorie',
  templateUrl: './modif-categorie.component.html',
  styleUrls: ['./modif-categorie.component.css']
})
export class ModifCategorieComponent implements OnInit {

  id: number;
  data: any;
  categorie = new Categories();
  constructor(private route: ActivatedRoute, private categorieService: CategoriesService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getCategorie();
  }

  getCategorie() {
    this.categorieService.getCategorieById(this.id).subscribe(res => {
      this.data = res;
      this.categorie = this.data;
    });
  }

  updateCategorie() {
    this.categorieService.updateCategorie(this.id , this.categorie).subscribe(res => {
     this.router.navigate(['/listCategorie']);
    });
 }

}
