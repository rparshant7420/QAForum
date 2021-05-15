import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(public userServices:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  registerIt(f:NgForm){
    // console.log(f.value);
    this.userServices.register(f.value).subscribe((res)=>{
      console.log(res);
      // alert('registered successfully');
    },(err)=>{
      console.log(err)
    })
    this.router.navigateByUrl("/signin");
  }

}
