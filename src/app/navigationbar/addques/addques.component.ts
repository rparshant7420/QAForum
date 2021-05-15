import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/shared/questions.service';
// import { ConsoleReporter } from 'jasmine';
import { UserService } from 'src/app/shared/user.service';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addques',
  templateUrl: './addques.component.html',
  styleUrls: ['./addques.component.css']
})
export class AddquesComponent implements OnInit {

  questionResponse:any;
  questionId:any;

  constructor(public userServices:UserService, public questionsService:QuestionsService, private router:Router) { }

  ngOnInit() {

    // this.questionsService.displayQues()

  }

  foods: Food[] = [
    {value: 'sports', viewValue: 'sports'},
    {value: 'Mathematics', viewValue: 'Mathematics'},
    {value: 'Music', viewValue: 'Music'},
    {value: 'Fashion and style', viewValue: 'Fashion and style'},
    {value: 'Food', viewValue: 'Food'},
    {value: 'Other..', viewValue: 'Other..'},
  ];

onSubmit(f:NgForm){
  this.questionsService.addQues(f.value).subscribe((res)=>{
    this.questionResponse=res;
    this.questionId=this.questionResponse.data._id;
    // console.log(this.questionId);
    // alert('Question added successfully')
    this.questionsService.setQuesID(this.questionId);
  })
}

RunOnSubmit(){
  // location.reload();
}

}
