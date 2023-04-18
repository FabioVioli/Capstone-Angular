import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/Navbars/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TutorialsComponent } from './components/TutorialsFolder/tutorials/tutorials.component';
import { CoachingComponent } from './components/CoachingFolder/coachings/coaching.component';
import { LookingForPalComponent } from './components/LookingForPalsFolder/looking-for-pal/looking-for-pal.component';
import { MainComponent } from './components/main/main.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { lfpReadPostComponent } from './components/LookingForPalsFolder/lfp-read-post/lfp-read-post.component';
import { lfpEditPostComponent } from './components/LookingForPalsFolder/lfp-edit-post/lfp-edit-post.component';
import { lfpPostComponent } from './components/LookingForPalsFolder/lfp-post/lfp-post.component';
import { TutorialPostComponent } from './components/TutorialsFolder/tutorial-post/tutorial-post.component';
import { TutorialReadComponent } from './components/TutorialsFolder/tutorial-read/tutorial-read.component';
import { TutorialEditComponent } from './components/TutorialsFolder/tutorial-edit/tutorial-edit.component';
import { CoachingPostComponent } from './components/CoachingFolder/coaching-post/coaching-post.component';
import { CoachingEditComponent } from './components/CoachingFolder/coaching-edit/coaching-edit.component';
import { CoachingReadComponent } from './components/CoachingFolder/coaching-read/coaching-read.component';
import { NavbarMobileTopComponent } from './components/Navbars/navbar-mobile-top/navbar-mobile-top.component';
import { ModalComponent } from './modal/modal.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TutorialsComponent,
    CoachingComponent,
    LookingForPalComponent,
    MainComponent,
    lfpReadPostComponent,
    lfpEditPostComponent,
    lfpPostComponent,
    TutorialPostComponent,
    TutorialReadComponent,
    TutorialEditComponent,
    CoachingPostComponent,
    CoachingEditComponent,
    CoachingReadComponent,
    NavbarMobileTopComponent,
    ModalComponent,
    UserDetailsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
