import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  credentials, editUser, Login, User } from '../shared/user.model'
// import {QuestionsService} from './questions.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public newUser:User ={
    name:'',
    email:'',
    password:''
  }

  public existingUser:Login = {
    email:'',
    password:''
  }

  public userCredentials:credentials = {
    contact:'',
    location:'',
    languages:'',
    userID:this.getUserId()
  }

  public Edit:editUser = {
    name:'',
    email:''
  }

  // public newQues:AddQues = {
  //  category:'',
  //  question:'',
  //  questionInfo:'',
  //  userID:this.getUserId()
  // }


  constructor(private http:HttpClient) { }

  // TO REGISTER

  register(user:User){
    return this.http.post('http://localhost:3000/AddingYou',user);
  }

  // TO LOGIN

  loginuser(loginUser:Login){
    // console.log(loginUser)
    return this.http.post('http://localhost:3000/loggingin',loginUser);
  }

  // TO EDIT USER PROFILE

  editUser(user:User){
    var userID = this.getUserId()
    return this.http.put('http://localhost:3000/updatingYou/'+userID,user);
  }


    // TO STORE TOKEN IN LOCAL STORAGE

    setData(token:any){
      localStorage.setItem('tempToken',token)
      // console.log('tempToken');
    }
    getData(){
      return localStorage.getItem('tempToken');
    }
    removeData(){
      localStorage.removeItem('tempToken');
    }

    // TO STORE ID IN LOCAL STORAGE

    setUserId(id:string){
      // console.log(id);
      localStorage.setItem('UserId',id);
    }
    getUserId(){
      return localStorage.getItem('UserId');
    }
    removeUserId(){
      localStorage.removeItem('userId');
    }

    // GET TOKEN AND DECODE IT

    getPayload(){
      // console.log(this.getData());
      var koten = this.getData();
      var token = JSON.stringify(koten)
      if(token){
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload)
      }
      else{
        return null;
      }
    }

    // TO CHECK USER LOGIN

    isLoggedIn(){
      var userPaylod = this.getPayload();
      // console.log(userPaylod);
      if(userPaylod){
        return userPaylod.exp>Date.now()/1000;
      }
      else {return null}
    }

    // TO DISPLAY USER BY USING ID

    display(){
      var userId = this.getUserId();
      return this.http.get('http://localhost:3000/userinfo/'+userId);
    }

    //  TO ADD QUESTIONS

    // addQue(questions:AddQues){
    //   return this.http.post('http://localhost:3000/addingQue',questions)
    // }

    // TO ADD CREDENTIALS

    addCredentials(userinfo:credentials){
    return this.http.post('http://localhost:3000/addingCredentials',userinfo);
    }

    // TO SHOW CREDENTIALS

    displayCredentials(){
      // var credenId = this.getCredenId();
      var userId = this.getUserId()
      return this.http.get('http://localhost:3000/credentialInfo/'+userId);
    }

    // TO STORE CREDENTIAL ID IN LOCALSTORAGE

  //   setCredenId(id:any){
  //     // console.log(id);
  //     localStorage.setItem('credenID',id);
  //   }

  //   getCredenId(){
  //   return  localStorage.getItem('credenID');
  //   }

  //   removeCredenId(){
  //     localStorage.removeItem('credenID');
  //   }
  }
