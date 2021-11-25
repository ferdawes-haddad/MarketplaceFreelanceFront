import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutBlogComponent } from './Blog/ajout-blog/ajout-blog.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ModifBlogComponent } from './Blog/modif-blog/modif-blog.component';
import { AjoutCvComponent } from './Cv/ajout-cv/ajout-cv.component';
import { ListCvComponent } from './Cv/list-cv/list-cv.component';
import { UpdateCvComponent } from './Cv/update-cv/update-cv.component';
import { AjoutEmploisComponent } from './Emplois/ajout-emplois/ajout-emplois.component';
import { DetailsEmploisComponent } from './Emplois/details-emplois/details-emplois.component';
import { ListeEmploisComponent } from './Emplois/liste-emplois/liste-emplois.component';
import { ModifEmploisComponent } from './Emplois/modif-emplois/modif-emplois.component';
import { FooterComponent } from './footer/footer.component';
import { ListFreelanceComponent } from './Freelance/list-freelance/list-freelance.component';
import { HomeDonneurComponent } from './home-donneur/home-donneur.component';
import { HomeEsnComponent } from './home-esn/home-esn.component';
import { HomeFreelanceComponent } from './home-freelance/home-freelance.component';
import { HomeComponent } from './home/home.component';
import { AjoutMissionComponent } from './Mission/ajout-mission/ajout-mission.component';
import { ListMissionComponent } from './Mission/list-mission/list-mission.component';
import { ModifMissionComponent } from './Mission/modif-mission/modif-mission.component';
import { AjoutSkylesComponent } from './Skyles/ajout-skyles/ajout-skyles.component';
import { ListSkylesComponent } from './Skyles/list-skyles/list-skyles.component';
import { ModifSkylesComponent } from './Skyles/modif-skyles/modif-skyles.component';
import { DetailUserComponent } from './User/detail-user/detail-user.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { LoginComponent } from './User/login/login.component';
import { ModifUserComponent } from './User/modif-user/modif-user.component';
import { RegisterComponent } from './User/register/register.component';
import { RequestResetComponent } from './User/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './User/password/response-reset/response-reset.component';
import { AuthGuard } from './User/auth.guard';
import { AjoutSkillsComponent } from './skillsCv/ajout-skills/ajout-skills.component';
import { ModifSkillsComponent } from './skillsCv/modif-skills/modif-skills.component';
import { ListSkillsComponent } from './skillsCv/list-skills/list-skills.component';
import { HeaderComponent } from './header/header.component';
import { HeadearUtilisateurComponent } from './headear-utilisateur/headear-utilisateur.component';
import { ListEmpFreeComponent } from './Emplois/list-emp-free/list-emp-free.component';
import { ListCategorieComponent } from './Categorie/list-categorie/list-categorie.component';
import { ModifCategorieComponent } from './Categorie/modif-categorie/modif-categorie.component';
import { ChatComponent } from './Chat/chat/chat.component';
import { ListWebinarComponent } from './Webinar/list-webinar/list-webinar.component';
import { ChangePasswordRequestComponent } from './change-password-request/change-password-request.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AjoutWebinarComponent } from './Webinar/ajout-webinar/ajout-webinar.component';
import { ModifWebinarComponent } from './Webinar/modif-webinar/modif-webinar.component';
import { ListBlogEsnComponent } from './Blog/list-blog-esn/list-blog-esn.component';
import { AjoutFreelancerComponent } from './Freelance/ajout-freelancer/ajout-freelancer.component';
import { ModifFreelancerComponent } from './Freelance/modif-freelancer/modif-freelancer.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path:"freelance" , component: HomeFreelanceComponent },
  //     { path:"donneur" , component: HomeDonneurComponent },
  //     { path:"esnHome " , component: HomeEsnComponent },
  //   ],
  // },

  { path:"" , component: HomeComponent}, 
  { path:"freelance" , component: HomeFreelanceComponent},
  { path:"donneur" , component: HomeDonneurComponent},
  { path:"esn" , component: HomeEsnComponent},
 
  //Emplois
  { path:"ajoutEmplois" , component:  AjoutEmploisComponent},
  { path:"modifEmplois/:id" , component: ModifEmploisComponent},
  { path:"listEmplois" , component: ListeEmploisComponent},
  { path:"detailsEmplois/:id" , component: DetailsEmploisComponent},
  { path:"listEmpFreelance" , component: ListEmpFreeComponent},

  //Categoriee
  { path:"listCategorie" , component: ListCategorieComponent},
  { path:"modifCategorie/:id" , component: ModifCategorieComponent},

  //Mission
  { path:"ajoutMission" , component: AjoutMissionComponent},
  { path:"modifMission/:id" , component: ModifMissionComponent},
  { path:"listMission" , component: ListMissionComponent},

  //Blog
  { path:"ajoutBlog" , component: AjoutBlogComponent},
  { path:"modifBlog/:id" , component: ModifBlogComponent},
  { path:"listBlog" , component: ListBlogComponent},
  { path:"listBlogesn" , component: ListBlogEsnComponent},

  //Freelance
  { path:"listFreelance" , component: ListFreelanceComponent},
  { path:"ajoutFreelance" , component: AjoutFreelancerComponent},
  { path:"modifFreelance/:id" , component: ModifFreelancerComponent },

  //Inscrit
  { path:"listUser" , component: ListUserComponent },
  { path:"modifUser/:id" , component: ModifUserComponent },
  { path:"detailUser/:id" , component: DetailUserComponent },
  
  //Login
  { path:"login" , component: LoginComponent},
  { path:"register" , component: RegisterComponent},
  { path:"requestReset" , component: RequestResetComponent},
  { path:"responseReset" , component: ResponseResetComponent},

  //Skyles
  { path:"ajoutSkyles" , component: AjoutSkylesComponent},
  { path:"modifSkyles/:id" , component: ModifSkylesComponent},
  { path:"listSkyles" , component: ListSkylesComponent},

  //SkillsCv
  { path:"ajoutSkills" , component: AjoutSkillsComponent},
  { path:"modifSkills/:id" , component: ModifSkillsComponent},
  { path:"listSkills" , component: ListSkillsComponent},

  //Cv
  { path:"ajoutCv" , component: AjoutCvComponent},
  { path:"modifCv/:id" , component: UpdateCvComponent},
  { path:"listCv" , component: ListCvComponent},

  //footer
  { path:"footer" , component: FooterComponent},
  
  //header
  { path:"header" , component: HeaderComponent},
  { path:"headeruser" , component: HeadearUtilisateurComponent},

  //chat
  { path:"chat" , component: ChatComponent},

  //Webinar
  { path:"listWebinar" , component: ListWebinarComponent},
  { path:"ajoutWebinar" , component: AjoutWebinarComponent},
  { path:"modifWebinar/:id" , component: ModifWebinarComponent},

  { path: 'reset-password', component: ChangePasswordRequestComponent },
  { path: 'change-password', component: ChangePasswordComponent },

  { path: 'admin', component: AdminComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
