import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { PreloaderComponent } from './navigationbar/preloader/preloader.component';
import { LandingbodyComponent } from './landing-page/landingbody/landingbody.component';
import { QuestionAnswerComponent } from './navigationbar/question-answer/question-answer.component';
import { AddquesComponent } from './navigationbar/addques/addques.component';
import { AddansComponent } from './navigationbar/addans/addans.component';
import { ProfilecompoComponent } from './profilecompo/profilecompo.component';
import { InterestingpeoplesComponent } from './interestingpeoples/interestingpeoples.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component'


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CredentialhighlightComponent } from './credentialhighlight/credentialhighlight.component';
import { CategoryprofileComponent } from './categoryprofile/categoryprofile.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './registeration/signin/signin.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { PnfoundComponent } from './pnfound/pnfound.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationbarComponent,
    FooterComponent,
    PreloaderComponent,
    LandingbodyComponent,
    QuestionAnswerComponent,
    AddquesComponent,
    AddansComponent,
    ProfilecompoComponent,
    InterestingpeoplesComponent,
    CreatecategoryComponent,
    CredentialhighlightComponent,
    CategoryprofileComponent,
    ContactComponent,
    SigninComponent,
    RegisterationComponent,
    PnfoundComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule ,

    FormsModule,

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
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
