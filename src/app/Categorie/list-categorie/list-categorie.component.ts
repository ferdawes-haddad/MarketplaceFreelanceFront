import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Categories } from 'src/app/Model/categories';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  categories: Categories[];
  categorie: Categories;
  selectedCategories: Categories[];
  cat = new Categories;

  constructor(private categorieService: CategoriesService,private router:Router,
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getCategories(); 
  }

  getCategories(){
    this.categorieService.getCategorie().subscribe(
      ( data :  any ) => {
        this.categorie = data; 
      });  
  }

  addCategorie(){ 
    this.categorieService.addCategorie(this.categorie).subscribe(data =>
      { 
        this.router.navigate(['/ajoutEmplois']); 
      });
  }

  deleteSelectedCategories() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected categories?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.categories = this.categories.filter(val => !this.selectedCategories.includes(val));
            this.selectedCategories = null;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Categories Deleted', life: 3000});
        }
    });
  }

  updateCategorie(id: number) {
    this.router.navigate(['/modifCategorie', id]);
  }

  deleteCategorie(id: number) {
    this.categorieService.deleteCategorie(id).subscribe(res => {
      this.getCategories();
    } );
  }

}
