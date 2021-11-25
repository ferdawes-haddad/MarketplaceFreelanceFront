import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDonneurComponent } from './home-donneur/home-donneur.component';
import { HomeEsnComponent } from './home-esn/home-esn.component';
import { HomeFreelanceComponent } from './home-freelance/home-freelance.component';
import { AjoutEmploisComponent } from './Emplois/ajout-emplois/ajout-emplois.component';
import { ModifEmploisComponent } from './Emplois/modif-emplois/modif-emplois.component';
import { ListeEmploisComponent } from './Emplois/liste-emplois/liste-emplois.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutBlogComponent } from './Blog/ajout-blog/ajout-blog.component';
import { ModifBlogComponent } from './Blog/modif-blog/modif-blog.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { AjoutMissionComponent } from './Mission/ajout-mission/ajout-mission.component';
import { ListMissionComponent } from './Mission/list-mission/list-mission.component';
import { ModifMissionComponent } from './Mission/modif-mission/modif-mission.component'
import { ListFreelanceComponent } from './Freelance/list-freelance/list-freelance.component';
import { LoginComponent } from './User/login/login.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { DetailUserComponent } from './User/detail-user/detail-user.component';
import { ModifUserComponent } from './User/modif-user/modif-user.component';
import { AjoutSkylesComponent } from './Skyles/ajout-skyles/ajout-skyles.component';
import { ModifSkylesComponent } from './Skyles/modif-skyles/modif-skyles.component';
import { ListSkylesComponent } from './Skyles/list-skyles/list-skyles.component';
import { RegisterComponent } from './User/register/register.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule  }  from  '@angular/platform-browser/animations';
import { ToastrModule  }  from  'ngx-toastr';
import { DetailsEmploisComponent } from './Emplois/details-emplois/details-emplois.component';
import { AjoutCvComponent } from './Cv/ajout-cv/ajout-cv.component';
import { UpdateCvComponent } from './Cv/update-cv/update-cv.component';
import { ListCvComponent } from './Cv/list-cv/list-cv.component' ;

import { NgbAccordion, NgbModule, NgbPanel } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestResetComponent } from './User/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './User/password/response-reset/response-reset.component';
import { AjoutSkillsComponent } from './skillsCv/ajout-skills/ajout-skills.component';
import { ModifSkillsComponent } from './skillsCv/modif-skills/modif-skills.component';
import { ListSkillsComponent } from './skillsCv/list-skills/list-skills.component';
import { HeadearUtilisateurComponent } from './headear-utilisateur/headear-utilisateur.component';
import { ChangePasswordRequestComponent } from './change-password-request/change-password-request.component';
import { AuthentificationInterceptor } from './interceptor/authentification.interceptor';
//import { AvatarModule } from 'ngx-avatar';
import { EmploisFilterPipe } from './Emplois/emplois-filter.pipe';
import {AccordionModule} from 'primeng/accordion';


import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListEmpFreeComponent } from './Emplois/list-emp-free/list-emp-free.component';
import { AvatarModule } from 'ngx-avatar';
import { DialogModule } from 'primeng/dialog';
import { ListCategorieComponent } from './Categorie/list-categorie/list-categorie.component';
import { ModifCategorieComponent } from './Categorie/modif-categorie/modif-categorie.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CarouselModule } from 'primeng/carousel';
import { DragDropModule } from 'primeng/dragdrop';
import { ChatComponent } from './Chat/chat/chat.component';
import { AjoutWebinarComponent } from './Webinar/ajout-webinar/ajout-webinar.component';
import { ListWebinarComponent } from './Webinar/list-webinar/list-webinar.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ModifWebinarComponent } from './Webinar/modif-webinar/modif-webinar.component';
import { ListBlogEsnComponent } from './Blog/list-blog-esn/list-blog-esn.component';
import { AjoutFreelancerComponent } from './Freelance/ajout-freelancer/ajout-freelancer.component';
import { ModifFreelancerComponent } from './Freelance/modif-freelancer/modif-freelancer.component';
import { AdminComponent } from './admin/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, HomeDonneurComponent, HomeEsnComponent, HomeFreelanceComponent,
    AjoutEmploisComponent, ModifEmploisComponent, ListeEmploisComponent,
    AjoutBlogComponent, ModifBlogComponent, ListBlogComponent,
    AjoutMissionComponent, ListMissionComponent, ModifMissionComponent,
    ListFreelanceComponent,
    LoginComponent,
    ListUserComponent, DetailUserComponent, ModifUserComponent,
    AjoutSkylesComponent, ModifSkylesComponent, ListSkylesComponent,
    RegisterComponent,
    DetailsEmploisComponent,
    AjoutCvComponent,
    UpdateCvComponent,
    ListCvComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    RequestResetComponent,
    ResponseResetComponent,
    AjoutSkillsComponent,
    ModifSkillsComponent,
    ListSkillsComponent,
    HeadearUtilisateurComponent,
    ChangePasswordRequestComponent,
    EmploisFilterPipe,
    ListEmpFreeComponent,
    ListCategorieComponent,
    ModifCategorieComponent,
    ChatComponent,
    AjoutWebinarComponent,
    ListWebinarComponent,
    ChangePasswordComponent,
    ModifWebinarComponent,
    ListBlogEsnComponent,
    AjoutFreelancerComponent,
    ModifFreelancerComponent,
    AdminComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, ToastrModule.forRoot(),
    NgxPaginationModule,
    NgbModule, 
    AccordionModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    AvatarModule,
    DialogModule,
    SelectButtonModule,
    ButtonModule,
    ConfirmPopupModule,
    CarouselModule,
    DragDropModule,
  ],
  
  providers: [ MessageService, ConfirmationService
    /*{provide: HTTP_INTERCEPTORS, user: AuthentificationInterceptor, multi: true}*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

