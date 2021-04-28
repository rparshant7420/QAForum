import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';

// angular material imports

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';


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
import { AddansComponent } from './addans/addans.component';
import { ProfilecompoComponent } from './profilecompo/profilecompo.component';
import { InterestingpeoplesComponent } from './interestingpeoples/interestingpeoples.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component'


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CredentialhighlightComponent } from './credentialhighlight/credentialhighlight.component';
import { CategoryprofileComponent } from './categoryprofile/categoryprofile.component';
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
    AddansComponent,
    ProfilecompoComponent,
    InterestingpeoplesComponent,
    CreatecategoryComponent,
    CredentialhighlightComponent,
    CategoryprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
