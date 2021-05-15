import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddansComponent } from './navigationbar/addans/addans.component';
import { AddquesComponent } from './navigationbar/addques/addques.component';
import { CategoryprofileComponent } from './categoryprofile/categoryprofile.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfilecompoComponent } from './profilecompo/profilecompo.component';
import { QuestionAnswerComponent } from './navigationbar/question-answer/question-answer.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { SigninComponent } from './registeration/signin/signin.component';
import { AuthGuard } from './shared/auth.guard';
import { PnfoundComponent } from './pnfound/pnfound.component';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent
  },
  // {
  //   path:'**',
  //   component:PnfoundComponent
  // },
   {
     path:"questions",
     component:QuestionAnswerComponent
   },
   {
     path:"addque",
     component:AddquesComponent,
     canActivate:[AuthGuard]
   },
   {
     path:"answer",
     component:AddansComponent,
     canActivate:[AuthGuard]
   },
   {
     path:"profile",
     component:ProfilecompoComponent,
     canActivate:[AuthGuard]
   },
   {
     path:"category",
     component:CategoryprofileComponent,
     canActivate:[AuthGuard]
   },
   {
     path:"contact",
     component:ContactComponent
   },
   {
     path:"signup",
     component:RegisterationComponent
   },
   {
     path:"signin",
     component:SigninComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
