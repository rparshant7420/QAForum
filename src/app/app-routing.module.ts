import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AddansComponent } from './addans/addans.component';
import { AddquesComponent } from './addques/addques.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent
  },
  {
    path:"about",
    component:AboutpageComponent
  },
   {
     path:"services",
     component:ServicesComponent
   },
   {
     path:"questions",
     component:QuestionAnswerComponent
   },
   {
     path:"addque",
     component:AddquesComponent
   },
   {
     path:"answer",
     component:AddansComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
