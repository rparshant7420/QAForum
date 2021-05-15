import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-credentialhighlight',
  templateUrl: './credentialhighlight.component.html',
  styleUrls: ['./credentialhighlight.component.css']
})
export class CredentialhighlightComponent implements OnInit {

  // credenResponse:any;
  // credentialID:any;

  constructor(public userServices:UserService,private router:Router) { }

  ngOnInit() {
  }

  ngOnDestroy(){
  //   this.userServices.displayCredentials(this.id).subscribe((res)=>{
  //     console.log(res);
  //   })
  }
  onSubmit(f:NgForm){
    // console.log(f.value);
    this.userServices.addCredentials(f.value).subscribe((res)=>{

    })
  }

  onClickSubmit(){
    location.reload();
  }

}
