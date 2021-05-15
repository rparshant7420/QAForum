import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddquesComponent } from '../addques/addques.component';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/shared/questions.service';
@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

  quesiId:any;
  response:any;
  Question:any;
  UserInfo:any;

  // @ViewChild(MatAccordion) accordian:MatAccordion;
  constructor(public dialog:MatDialog , private router:Router, public quesServices:QuestionsService) { }

  openDialogue(){
    const dialogRef = this.dialog.open(AddquesComponent)
  }
  answers(){
    this.router.navigateByUrl('/answer')
  }

  ngOnInit(){
    this.quesiId = this.quesServices.getQuesID();
    this.quesServices.displayQues(this.quesiId).subscribe((res)=>{
      this.response = res;
      this.Question = this.response.data;
      this.UserInfo = this.Question.userID
      console.log(this.UserInfo);
    })
  }

}
