import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Blog } from 'src/app/Model/blog';
import { ArticleService } from 'src/app/Services/Article.service';

@Component({
  selector: 'app-list-blog-esn',
  templateUrl: './list-blog-esn.component.html',
  styleUrls: ['./list-blog-esn.component.css']
})
export class ListBlogEsnComponent implements OnInit {

  blog : Blog[];
  blogs : Blog;
  selectedBlog: Blog[];
  submitted: boolean;
  blogDialog: boolean;

  constructor(private router:Router, private blogService: ArticleService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  openNew() {
    this.router.navigate(['/ajoutEmplois']);
    this.submitted = false;
    this.blogDialog = true;
  }
  
  getBlog(){
    this.blogService.getBlog().subscribe(( data :  any ) => {
      this.blog = data; 
  }); 
  }

  deleteSelectedBlog() {
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer les produits sélectionnés?',
        header: 'Confirmer',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.blog = this.blog.filter(val => !this.selectedBlog.includes(val));
            this.selectedBlog = null;
            this.messageService.add({severity:'Succès', summary: 'À succès', detail: 'Emplois supprimés', life: 3000});
        }
    });
  }

  deleteBlog(nom : string ,id) {
    console.log(id);
    
    if(confirm("Are you sure to delete " + nom)) {
      this.blogService.deleteBlog(id).subscribe(res => {
        this.getBlog();
             console.log(id);
             
           } );
    }
  }
  
  editBlog(id: number) {
    this.router.navigate(['/modifBlog', id]);
  }
}
