import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LookingForPalComponent } from './components/LookingForPalsFolder/looking-for-pal/looking-for-pal.component';
import { CoachingComponent } from './components/CoachingFolder/coachings/coaching.component';
import { TutorialsComponent } from './components/TutorialsFolder/tutorials/tutorials.component';
import { lfpPostComponent } from './components/LookingForPalsFolder/lfp-post/lfp-post.component';
import { lfpReadPostComponent } from './components/LookingForPalsFolder/lfp-read-post/lfp-read-post.component';
import { lfpEditPostComponent } from './components/LookingForPalsFolder/lfp-edit-post/lfp-edit-post.component';
import { TutorialPostComponent } from './components/TutorialsFolder/tutorial-post/tutorial-post.component';
import { TutorialReadComponent } from './components/TutorialsFolder/tutorial-read/tutorial-read.component';
import { TutorialEditComponent } from './components/TutorialsFolder/tutorial-edit/tutorial-edit.component';
import { CoachingPostComponent } from './components/CoachingFolder/coaching-post/coaching-post.component';
import { CoachingReadComponent } from './components/CoachingFolder/coaching-read/coaching-read.component';
import { CoachingEditComponent } from './components/CoachingFolder/coaching-edit/coaching-edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'lfp', component:LookingForPalComponent},
  {path: 'coachings', component:CoachingComponent},
  {path: 'tutorials', component:TutorialsComponent},
  {path: 'lfp-post', component:lfpPostComponent},
  {path: 'read-post/:id', component:lfpReadPostComponent},
  {path: 'edit-post/:id', component:lfpEditPostComponent},
  {path: 'tutorial-post', component:TutorialPostComponent},
  {path: 'tutorial-read/:id', component:TutorialReadComponent},
  {path: 'tutorial-edit/:id', component:TutorialEditComponent},
  {path: 'coaching-post', component:CoachingPostComponent},
  {path: 'coaching-read/:id', component:CoachingReadComponent},
  {path: 'coaching-edit/:id', component:CoachingEditComponent},
  {path: 'user-details', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
