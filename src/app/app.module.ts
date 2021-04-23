import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';

// angular material imports

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ServicesComponent } from './services/services.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { LandingbodyComponent } from './landingbody/landingbody.component';
import { AboutbodyComponent } from './aboutbody/aboutbody.component';
import { ServicesbodyComponent } from './servicesbody/servicesbody.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { AddquesComponent } from './addques/addques.component';
import {MatSelectModule} from '@angular/material/select';
import { AddansComponent } from './addans/addans.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutpageComponent,
    ServicesComponent,
    NavigationbarComponent,
    FooterComponent,
    PreloaderComponent,
    LandingbodyComponent,
    AboutbodyComponent,
    ServicesbodyComponent,
    QuestionAnswerComponent,
    AddquesComponent,
    AddansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
