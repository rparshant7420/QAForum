import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public userservices:UserService, private router:Router) { }

  ngOnInit() {
    // localStorage.removeItem('Token')
  }

  // Blank Array
  userdata:any=[];

  onLogin(f:NgForm){
    this.userservices.loginuser(f.value).subscribe((res)=>{

      this.userdata=(res);
      // console.log(this.userdata.userinfo._id);

      this.userservices.setData(this.userdata.token);
      // console.log()
      this.userservices.setUserId(this.userdata.userinfo._id)
      console.log(this.userdata.userinfo._id);

    })
    this.router.navigateByUrl('/profile');

  }
}
