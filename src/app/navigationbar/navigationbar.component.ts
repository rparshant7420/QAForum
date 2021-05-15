import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor(public Router:Router,public userServices:UserService) { }


  userData:any=[];
  userinfo:any=[];

  ngOnInit() {

    this.userServices.display().subscribe((res)=>{
      this.userData = res;
      this.userinfo = this.userData.data
    })

  }
  profileop(){
    this.Router.navigateByUrl('/profile');
  }
  onLogout(){
    this.Router.navigateByUrl('/signin');
    this.userServices.removeData();
    alert("logged out successfully");
  }
}
