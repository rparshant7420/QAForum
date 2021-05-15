import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questions } from './questions.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public newQues:Questions={
    category:'',
    question:'',
    questionInfo:'',
    userID:this.userServices.getUserId()
  }

  constructor(public userServices:UserService, private http:HttpClient) { }

  // TO ADD QUESTION

  addQues(question:Questions){
    return this.http.post('http://localhost:3000/addingQue',question);
  }

  // TO CHECK ADDED QUESTIONS

  displayQues(id:any){
    // console.log(id);
    return this.http.get('http://localhost:3000/questionInfo/'+id);
  }

  // STORE QUESTION ID IN LOCALSTORAGE

  setQuesID(id:any){
    // console.log(id);
    localStorage.setItem('quesid',id);
  }

  getQuesID(){
  return localStorage.getItem('quesid');
  }
}

