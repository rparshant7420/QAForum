import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatecategoryComponent } from '../createcategory/createcategory.component';
import { CredentialhighlightComponent } from '../credentialhighlight/credentialhighlight.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { InterestingpeoplesComponent } from '../interestingpeoples/interestingpeoples.component';
import { AddquesComponent } from '../navigationbar/addques/addques.component';
import { QuestionsService } from '../shared/questions.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profilecompo',
  templateUrl: './profilecompo.component.html',
  styleUrls: ['./profilecompo.component.css']
})
export class ProfilecompoComponent implements OnInit {

  constructor(private dialog:MatDialog ,private userServices:UserService, public quesServices:QuestionsService
    , private router:Router) { }

  // userid:any;
  userData:any;
  userinfo:any;

  // QUESTIONS

  qustionId:any=[];


  // CREDENTIAL

  credenResponse:any;
  Credentials:any;

  ngOnInit() {


    this.userServices.display().subscribe((res)=>{
      // console.log(res);
      this.userData = res;
      this.userinfo = this.userData.data;
      // console.log(this.userinfo);
    })

    // TO SEE ADDED CREDENTIALS

    // console.log(this.userId);
    this.userServices.displayCredentials().subscribe((res)=>{
      // console.log(res);
      this.credenResponse=res;
      // console.log(this.credenResponse.data[0]);
      this.Credentials=this.credenResponse.data[0];
      // console.log(this.Credentials);

    })

  }
  editProfile(){
    this.dialog.open(EditProfileComponent,{width:'50%'})
  }

  followinterests(){
   this.dialog.open(InterestingpeoplesComponent);
  }
  createcategory(){
    this.dialog.open(CreatecategoryComponent);
  }
  editcredentials(){
   const dialogRef = this.dialog.open(CredentialhighlightComponent);
   dialogRef.afterClosed().subscribe(res=>{
    //  console.log(res);
   })
  }
  addQues(){
    this.router.navigateByUrl("/questions");
  }
}
